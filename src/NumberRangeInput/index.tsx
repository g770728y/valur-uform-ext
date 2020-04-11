import * as React from "react";
import { Row, Col, InputNumber } from "antd";
import * as R from "rambda";
import { padding } from "valor-app-utils";

interface Props {
  width?: number;
  value: number[];
  onChange: (nr: number[]) => void;
  disabled?: boolean;
}

const NumberRangeInput: React.FC<Props> = ({
  width = 200,
  value,
  onChange,
  disabled
}) => {
  const [range, setRange] = React.useState<number[]>(padding(value, 2, 0));
  const handleChange = React.useCallback(
    (i: number, v: number = 0) => {
      const _range = R.update(i, v, range);
      setRange(_range);
      onChange(_range);
    },
    [range]
  );
  return (
    <Row style={{ width }}>
      <Col span={11}>
        <InputNumber
          disabled={disabled}
          value={range[0]}
          onChange={v => handleChange(0, v)}
        />
      </Col>
      <Col span={2}>至</Col>
      <Col span={11}>
        <InputNumber
          disabled={disabled}
          value={range[1]}
          onChange={v => handleChange(1, v)}
        />
      </Col>
    </Row>
  );
};

export default NumberRangeInput;
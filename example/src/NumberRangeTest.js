import * as React from "react";
import Mock from "mockjs";
import SchemaForm, { connect, registerFormField, Field } from "@uform/antd";
import { NumberRangeInput } from "valor-uform-ext";

registerFormField(
  "number-range",
  connect()(props => <NumberRangeInput {...props} />)
);

const NumberRangeTest = () => {
  return (
    <SchemaForm
      value={{ nr: [] }}
      onSubmit={values => console.log("onSubmit", values)}
      layout={"horizontal"}
    >
      <Field name="nr" title="数值范围" x-component="number-range" />
    </SchemaForm>
  );
};

export default NumberRangeTest;

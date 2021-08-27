import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { InputField } from "@/components/InputField";
import { useForm } from "@/hooks";

export const App: FunctionComponent = () => {
  const { fields, handleInputChange, handleSubmit } = useForm({
    intialValues: { name: "", age: "" },
  });

  const onSubmit = () => console.log(fields);

  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <CustomInput
        inputId="name"
        placeholder="Name"
        value={fields.name}
        onChange={handleInputChange}
        name="name"
      />
      <CustomInput
        inputId="age"
        placeholder="Age"
        value={fields.age}
        onChange={handleInputChange}
        name="age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const CustomInput = styled(InputField)`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

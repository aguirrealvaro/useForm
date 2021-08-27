import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { InputField } from "@/components/InputField";
import { useForm } from "@/hooks";

export const App: FunctionComponent = () => {
  const { fields, errors, handleInputChange, handleSubmit } = useForm({
    intialValues: { name: "", password: "", age: "" },
    validations: {
      name: {
        required: {
          value: true,
          message: "Required field",
        },
        pattern: {
          value: "^[A-Za-z]*$",
          message: "Only letters",
        },
      },
      age: {
        custom: {
          isValid: (value) => parseInt(value) >= 18,
          message: "You have to be at least 18 years old.",
        },
      },
      password: {
        required: {
          value: true,
          message: "Required field",
        },
        custom: {
          isValid: (value) => value.length > 6,
          message: "The password needs to be larger than 6",
        },
      },
    },
  });

  const onSubmit = () => {
    console.log("On submit");
    console.log(fields);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <CustomInput
        inputId="name"
        placeholder="Name"
        value={fields.name}
        onChange={handleInputChange}
        name="name"
        error={errors?.name}
      />
      <CustomInput
        inputId="password"
        placeholder="Password"
        value={fields.password}
        onChange={handleInputChange}
        name="password"
        error={errors?.password}
      />
      <CustomInput
        inputId="age"
        placeholder="Age"
        value={fields.age}
        onChange={handleInputChange}
        name="age"
        error={errors?.age}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

const Form = styled.form`
  width: 60%;
  margin: 4rem auto;
`;

const CustomInput = styled(InputField)`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

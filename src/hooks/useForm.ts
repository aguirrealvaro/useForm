import React, { ChangeEvent, useState } from "react";

type FieldsType = Record<string, string>;

type UseFormParams = {
  intialValues?: FieldsType;
};

type UseFormReturnType = {
  fields: FieldsType;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, onSubmit: () => void) => void;
};

export const useForm = ({ intialValues }: UseFormParams): UseFormReturnType => {
  const [fields, setFields] = useState<FieldsType>(intialValues || {});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, onSubmit: () => void) => {
    e.preventDefault();
    onSubmit();
  };

  return { fields, handleInputChange, handleSubmit };
};

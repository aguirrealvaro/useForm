import React, { ChangeEvent, useState } from "react";
import { FieldsType, UseFormParams } from "./types";

type ErrorsType = Record<string, string>;

type UseFormReturnType = {
  fields: FieldsType;
  errors: ErrorsType | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, onSubmit: () => void) => void;
};

export const useForm = ({ intialValues, validations }: UseFormParams): UseFormReturnType => {
  const [fields, setFields] = useState<FieldsType>(intialValues || {});
  const [errors, setErrors] = useState<ErrorsType | undefined>(undefined);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, onSubmit?: () => void) => {
    e.preventDefault();

    let valid = true;
    const newErrors: Record<string, string> = {};
    if (validations) {
      for (const key in validations) {
        const value = fields[key];
        const currentValidation = validations[key];

        if (currentValidation.custom && !currentValidation.custom?.isValid(value)) {
          valid = false;
          newErrors[key] = currentValidation.custom.message;
        }

        const pattern = currentValidation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        if (currentValidation.required?.value && !value) {
          valid = false;
          newErrors[key] = currentValidation.required.message;
        }
      }
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setErrors(undefined);
    onSubmit?.();
  };

  return { fields, errors, handleInputChange, handleSubmit };
};

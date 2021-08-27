export type FieldsType = Record<string, string>;

export type UseFormParams = {
  intialValues?: FieldsType;
};

export type ValidationType = {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
};

export type FieldsType = Record<string, string>;

export type UseFormParams = {
  intialValues?: FieldsType;
  validations?: Record<string, ValidationType>;
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

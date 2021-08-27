import React, { FunctionComponent } from "react";
import { InputField } from "@/components";
import { useForm } from "@/hooks";

export const App: FunctionComponent = () => {
  useForm();
  return <InputField inputId="123" placeholder="Placeholder" />;
};

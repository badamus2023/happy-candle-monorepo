import { AnyFieldApi } from "@tanstack/react-form";

export const getFirstError = (field: AnyFieldApi) => {
  if (field.getMeta().errors.length > 0) {
    return field.getMeta().errors[0].message;
  }
  return "";
};

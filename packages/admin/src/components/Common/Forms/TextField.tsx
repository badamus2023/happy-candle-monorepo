import React from "react";
import Label from "./Label";
import styled from "styled-components";
import FieldError from "./FieldError";
import Flex from "../Flex";

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#e74c3c" : "#d9d9e1")};
  border-radius: 4px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #7a7ae5;
    box-shadow: 0 0 0 2px rgba(122, 122, 229, 0.2);
  }
`;

interface TextFieldProps {
  label: string;
  error?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  id = "text-field",
  name = "text-field",
  placeholder = "",
  value,
  onChange,
  required = false,
  type = "text",
}) => {
  return (
    <Flex flexDirection="column">
      <Label>
        {label}
        {required && " *"}
      </Label>
      <Input
        type={type}
        id={id}
        hasError={!!error}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <FieldError error={error}></FieldError>}
    </Flex>
  );
};

export default TextField;

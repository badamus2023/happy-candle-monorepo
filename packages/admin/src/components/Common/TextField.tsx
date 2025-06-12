import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #5a5a75;
  margin-bottom: 0.4rem;
`;

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

const ErrorText = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: #e74c3c;
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
    <>
      <Label htmlFor={id}>
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
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default TextField;

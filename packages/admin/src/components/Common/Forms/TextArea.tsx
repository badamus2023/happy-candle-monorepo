import React from "react";
import styled from "styled-components";
import Label from "./Label";
import FieldError from "./FieldError";
import Flex from "../Flex";

const TextAreaStyled = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#e74c3c" : "#d9d9e1")};
  border-radius: 4px;
  font-size: 0.95rem;
  resize: vertical;
  min-height: 6rem;

  &:focus {
    outline: none;
    border-color: #7a7ae5;
    box-shadow: 0 0 0 2px rgba(122, 122, 229, 0.2);
  }
`;

interface TextAreaProps {
  label: string;
  error?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  id = "text-area",
  name = "text-area",
  placeholder = "",
  value,
  onChange,
  required = false,
  rows = 4,
}) => {
  return (
    <Flex flexDirection="column">
      <Label>
        {label}
        {required && " *"}
      </Label>
      <TextAreaStyled
        id={id}
        hasError={!!error}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
      />
      {error && <FieldError error={error}></FieldError>}
    </Flex>
  );
};

export default TextArea;

import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #5a5a75;
  margin-bottom: 0.4rem;
`;

const TextAreaStyled = styled.textarea`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
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
  id = "text-area",
  name = "text-area",
  placeholder = "",
  value,
  onChange,
  required = false,
  rows = 4,
}) => {
  return (
    <>
      <Label htmlFor={id}>
        {label}
        {required && " *"}
      </Label>
      <TextAreaStyled
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </>
  );
};

export default TextArea;

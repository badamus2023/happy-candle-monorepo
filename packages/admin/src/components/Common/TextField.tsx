import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #5a5a75;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
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
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  id = "text-field",
  name = "text-field",
  placeholder = "",
  value,
  onChange,
  required = false,
  className,
  type = "text",
}) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>
        {label}
        {required && " *"}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextField;

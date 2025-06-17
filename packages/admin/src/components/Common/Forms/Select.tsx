import styled from "styled-components";
import Label from "./Label";
import Flex from "../Flex";

const StyledSelect = styled.select`
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
  border-radius: 4px;
  font-size: 0.95rem;
`;

interface SelectProps<T extends string> {
  label: string;
  values: T[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select<T extends string>({ values, label, onChange }: SelectProps<T>) {
  return (
    <Flex flexDirection="column">
      <Label>{label}</Label>
      <StyledSelect onChange={onChange}>
        {values.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </StyledSelect>
    </Flex>
  );
}

export default Select;

import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #5a5a75;
  margin-bottom: 0.4rem;
`;

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;

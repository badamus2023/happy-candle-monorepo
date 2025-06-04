import styled from "styled-components";

interface StyledButtonInterface
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  borderRadius?: string;
  bgc?: string;
  color?: string;
  wd?: string;
  border?: string;
  p?: string;
}

const Button = styled.button<StyledButtonInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgc }) => bgc || "#bf7ca6"};
  width: ${({ wd }) => wd || "100%"};
  color: #ffffff;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a05a8d;
  }
`;

const StyledButton: React.FC<StyledButtonInterface> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButton;

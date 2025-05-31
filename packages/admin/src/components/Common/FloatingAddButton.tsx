import styled from "styled-components";

const StyledFloatingAddButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
  background-color: #bf7ca6;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a05a8d;
    cursor: pointer;
  }
`;

interface FloatingAddButtonProps {
  onClick?: () => void;
}

const FloatingAddButton: React.FC<FloatingAddButtonProps> = ({ onClick }) => {
  return <StyledFloatingAddButton onClick={onClick}>+</StyledFloatingAddButton>;
};

export default FloatingAddButton;

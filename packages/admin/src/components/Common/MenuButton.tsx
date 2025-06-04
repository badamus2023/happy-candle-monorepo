import styled from "styled-components";

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s;

  &:hover {
    color: #bf7ca6;
  }

  &[aria-expanded="true"] {
    transform: rotate(180deg);
  }
`;

interface MenuButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, onClick }) => {
  return <ToggleButton onClick={onClick}>{children}</ToggleButton>;
};

export default MenuButton;

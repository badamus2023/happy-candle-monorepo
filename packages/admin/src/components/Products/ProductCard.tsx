import styled from "styled-components";
import Flex from "../Common/Flex";
import { useState, useCallback } from "react";

const Card = styled.div<{ area?: string }>`
  grid-area: ${(p) => p.area || "auto"};
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 500;
  color: #2c2c2c;
`;

const ProductImage = styled.img`
  padding: 0.5rem;
  width: 15rem;
  max-height: 10rem;
  object-fit: cover;
  border-radius: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c2c2c;
`;

const StockCount = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  text-align: center;
`;

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

const ActionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MenuItem = styled.button<{ disabled?: boolean }>`
  background-color: #bf7ca6;
  width: 100%;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem;

  &:hover:not([disabled]) {
    background-color: #a05a8d;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export interface Action {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ProductProps {
  id: string;
  area?: string;
  title: string;
  price: string;
  imageUrl: string;
  inStock?: number;
  actions?: Action[];
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  area,
  title,
  price,
  imageUrl,
  inStock = 0,
  actions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const stockText = inStock > 0 ? `${inStock} left in stock` : "Out of stock";

  const toggle = useCallback(() => setExpanded((e) => !e), []);

  const defaultActions: Action[] = [
    { label: "Edit", onClick: () => console.log("edit", id) },
    {
      label: "Delete",
      onClick: () => console.log("delete", id),
      disabled: inStock === 0,
    },
  ];

  const menuActions = actions && actions.length > 0 ? actions : defaultActions;

  return (
    <Card area={area}>
      <Flex flexDirection="column" gap="0.5rem">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <ProductTitle>{title}</ProductTitle>
          <ProductImage src={imageUrl} alt={title} />
          <ProductPrice>{price}</ProductPrice>
          <StockCount>{stockText}</StockCount>
        </Flex>

        <Flex
          justifyContent="flex-end"
          alignItems="center"
          border-top="1px solid #bf7ca911"
        >
          <ToggleButton
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls={`actions-${id}`}
            aria-label={expanded ? "Collapse options" : "Expand options"}
          >
            ↓
          </ToggleButton>
        </Flex>

        {expanded && (
          <ActionsMenu
            id={`actions-${id}`}
            role="menu"
            aria-label="Product actions"
          >
            {menuActions.map(({ label, onClick, disabled }) => (
              <MenuItem
                key={label}
                onClick={onClick}
                disabled={disabled}
                role="menuitem"
              >
                {label}
              </MenuItem>
            ))}
          </ActionsMenu>
        )}
      </Flex>
    </Card>
  );
};

export default ProductCard;

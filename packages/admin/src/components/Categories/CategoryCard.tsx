import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Card = styled.div<{ area?: string }>`
  grid-area: ${(p) => p.area || "auto"};
  min-width: 15rem;
  min-height: 7rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CategoryImage = styled.img`
  width: 100%;
  max-width: 12rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  background: #f3f4f6;
`;

const Name = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #2c2c2c;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0.25rem 0;
  flex-grow: 1;
`;

const Count = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
`;

const ToggleButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  transition: transform 0.2s;
  &:hover {
    color: #bf7ca6;
  }
  &[aria-expanded="true"] {
    transform: rotate(180deg);
  }
`;

const ActionsMenu = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MenuItem = styled.button<{ disabled?: boolean }>`
  background-color: #8b5cf6;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover:not([disabled]) {
    background-color: #7c3aed;
  }
  ${(p) =>
    p.disabled &&
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

export interface CategoryProps {
  id: string;
  area?: string;
  name: string;
  description?: string;
  imageUrl?: string;
  productCount?: number;
  actions?: Action[];
}

const CategoryCard: React.FC<CategoryProps> = ({
  id,
  area,
  name,
  description,
  imageUrl,
  productCount,
  actions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((e) => !e), []);

  const defaultActions: Action[] = [
    { label: "View Products", onClick: () => console.log("view", id) },
    { label: "Edit Category", onClick: () => console.log("edit", id) },
    { label: "Delete Category", onClick: () => console.log("delete", id) },
  ];

  const menuActions = actions && actions.length > 0 ? actions : defaultActions;

  return (
    <Card area={area}>
      {imageUrl && <CategoryImage src={imageUrl} alt={name} loading="lazy" />}
      <Name>{name}</Name>
      {description && <Description>{description}</Description>}
      {typeof productCount === "number" && (
        <Count>{productCount} products</Count>
      )}

      <ToggleButton
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={`cat-actions-${id}`}
        aria-label={expanded ? "Hide actions" : "Show actions"}
      >
        ↓
      </ToggleButton>

      {expanded && (
        <ActionsMenu id={`cat-actions-${id}`} role="menu">
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
    </Card>
  );
};

export default CategoryCard;

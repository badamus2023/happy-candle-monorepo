// DiscountCard.tsx
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Flex from "../Common/Flex";

const Card = styled.div<{ area?: string }>`
  min-width: 15rem;
  min-height: 12rem;
  grid-area: ${({ area }) => area || "auto"};
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Code = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: #2c2c2c;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0.5rem 0;
`;

const Amount = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #065f46;
`;

const Expiry = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0.5rem 0 0;
`;

const StatusBadge = styled.span<{ status: "Active" | "Expired" }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ status }) =>
    status === "Active" ? "#d1fae5" : "#fee2e2"};
  color: ${({ status }) => (status === "Active" ? "#065f46" : "#b91c1c")};
  margin-top: 0.5rem;
  align-self: flex-start;
`;

const ToggleButton = styled.button`
  all: unset;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
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
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover:not([disabled]) {
    background: #059669;
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

export interface DiscountProps {
  id: string;
  area?: string;
  code: string;
  description?: string;
  type: "percentage" | "fixed";
  amount: number; // e.g. 20 (for 20%) or 10 (for $10 off)
  currency?: string; // if fixed
  expiryDate: string; // ISO or display string
  status?: "Active" | "Expired";
  actions?: Action[];
}

const DiscountCard: React.FC<DiscountProps> = ({
  id,
  area,
  code,
  description,
  type,
  amount,
  currency = "USD",
  expiryDate,
  status = "Active",
  actions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((e) => !e), []);

  const formattedAmount =
    type === "percentage"
      ? `${amount}% off`
      : `${currency} ${amount.toFixed(2)}`;

  const defaultActions: Action[] = [
    { label: "Edit Discount", onClick: () => console.log("edit", id) },
    { label: "Delete Discount", onClick: () => console.log("delete", id) },
    {
      label: status === "Active" ? "Expire Now" : "Activate",
      onClick: () => console.log("toggle status", id),
    },
  ];

  const menuActions = actions?.length ? actions : defaultActions;

  return (
    <Card area={area}>
      <Flex flexDirection="column" gap="0.25rem">
        <Code>{code}</Code>
        {description && <Description>{description}</Description>}
        <Amount>{formattedAmount}</Amount>
        <Expiry>Expires on: {expiryDate}</Expiry>
        <StatusBadge status={status}>{status}</StatusBadge>
      </Flex>

      <ToggleButton
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={`disc-actions-${id}`}
        aria-label={expanded ? "Hide actions" : "Show actions"}
      >
        ↓
      </ToggleButton>

      {expanded && (
        <ActionsMenu id={`disc-actions-${id}`} role="menu">
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

export default DiscountCard;

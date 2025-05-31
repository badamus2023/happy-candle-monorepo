import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Card = styled.div<{ area?: string }>`
  grid-area: ${({ area }) => area || "auto"};
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const OrderNumber = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #2c2c2c;
`;

const CustomerName = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #4b5563;
`;

const OrderDate = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0;
`;

const TotalAmount = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #065f46;
  margin: 0.5rem 0;
`;

const StatusBadge = styled.span<{
  status: "Pending" | "Completed" | "Cancelled";
}>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ status }) =>
    status === "Completed"
      ? "#d1fae5"
      : status === "Cancelled"
        ? "#fee2e2"
        : "#fef3c7"};
  color: ${({ status }) =>
    status === "Completed"
      ? "#065f46"
      : status === "Cancelled"
        ? "#b91c1c"
        : "#92400e"};
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
  background-color: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not([disabled]) {
    background-color: #2563eb;
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

export interface OrderProps {
  id: string;
  area?: string;
  orderNumber: string;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  currency?: string;
  status?: "Pending" | "Completed" | "Cancelled";
  actions?: Action[];
}

const OrderCard: React.FC<OrderProps> = ({
  id,
  area,
  orderNumber,
  customerName,
  orderDate,
  totalAmount,
  currency = "USD",
  status = "Pending",
  actions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((e) => !e), []);

  const formattedTotal = `${currency} ${totalAmount.toFixed(2)}`;

  const defaultActions: Action[] = [
    { label: "View Details", onClick: () => console.log("view", id) },
    {
      label: status === "Pending" ? "Mark Complete" : "Reopen Order",
      onClick: () => console.log("toggle status", id),
    },
    {
      label: "Print Invoice",
      onClick: () => console.log("print invoice", id),
      disabled: status === "Cancelled",
    },
    {
      label: "Cancel Order",
      onClick: () => console.log("cancel", id),
      disabled: status !== "Pending",
    },
  ];

  const menuActions = actions && actions.length > 0 ? actions : defaultActions;

  return (
    <Card area={area}>
      <OrderHeader>
        <OrderNumber>Order #{orderNumber}</OrderNumber>
        <CustomerName>Customer: {customerName}</CustomerName>
        <OrderDate>Date: {orderDate}</OrderDate>
      </OrderHeader>

      <TotalAmount>Total: {formattedTotal}</TotalAmount>
      <StatusBadge status={status!}>{status}</StatusBadge>

      <ToggleButton
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={`order-actions-${id}`}
        aria-label={expanded ? "Hide actions" : "Show actions"}
      >
        ↓
      </ToggleButton>

      {expanded && (
        <ActionsMenu id={`order-actions-${id}`} role="menu">
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

export default OrderCard;

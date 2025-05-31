import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Flex from "../Common/Flex";

const Card = styled.div<{ area?: string }>`
  grid-area: ${(p) => p.area || "auto"};
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const Name = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c2c2c;
`;

const Email = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

const JoinedDate = styled.p`
  font-size: 0.8rem;
  color: #9ca3af;
`;

const StatusBadge = styled.span<{ status: string }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(p) =>
    p.status === "Active"
      ? "#d1fae5"
      : p.status === "Inactive"
        ? "#fee2e2"
        : "#e5e7eb"};
  color: ${(p) =>
    p.status === "Active"
      ? "#065f46"
      : p.status === "Inactive"
        ? "#b91c1c"
        : "#374151"};
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
  background-color: #7e57c2;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover:not([disabled]) {
    background-color: #6930c3;
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

export interface CustomerProps {
  id: string;
  area?: string;
  name: string;
  email: string;
  avatarUrl?: string;
  joinedAt?: string;
  status?: "Active" | "Inactive" | "Pending";
  actions?: Action[];
}

const CustomerCard: React.FC<CustomerProps> = ({
  id,
  area,
  name,
  email,
  avatarUrl,
  joinedAt,
  status = "Active",
  actions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((e) => !e), []);

  const defaultActions: Action[] = [
    { label: "Edit", onClick: () => console.log("edit", id) },
    {
      label: "Delete",
      onClick: () => console.log("delete", id),
      disabled: status !== "Active",
    },
    {
      label: "Send Email",
      onClick: () => window.location.assign(`mailto:${email}`),
    },
  ];

  const menuActions = actions && actions.length > 0 ? actions : defaultActions;

  return (
    <Card area={area}>
      <Flex alignItems="center" gap="1rem">
        {avatarUrl ? (
          <Avatar src={avatarUrl} alt={name} loading="lazy" />
        ) : (
          <Avatar
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              name
            )}&background=E5E7EB&color=374151`}
            alt={name}
          />
        )}
        <div>
          <Name>{name}</Name>
          <Email>{email}</Email>
          {joinedAt && <JoinedDate>Joined: {joinedAt}</JoinedDate>}
          <StatusBadge status={status}>{status}</StatusBadge>
        </div>
      </Flex>

      <ToggleButton
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={`cust-actions-${id}`}
        aria-label={expanded ? "Hide actions" : "Show actions"}
      >
        ↓
      </ToggleButton>

      {expanded && (
        <ActionsMenu id={`cust-actions-${id}`} role="menu">
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

export default CustomerCard;

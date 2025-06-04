import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Flex from "../../components/Common/Flex";
import MenuButton from "../../components/Common/MenuButton";
import SettingModal from "../Setting/SettingModal";
import { SettingItem } from "../../types/types";

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
  amount: number;
  currency?: string;
  expiryDate: string;
  status?: "Active" | "Expired";
  actions?: Action[];
}

const DiscountCard: React.FC<DiscountProps> = ({
  area,
  code,
  description,
  type,
  amount,
  currency = "USD",
  expiryDate,
  status = "Active",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState<SettingItem[]>([
    { name: "Code", value: code, editable: true },
    { name: "Description", value: description || "", editable: true },
    { name: "Type", value: type, editable: true },
    { name: "Amount", value: amount.toString(), editable: true },
    { name: "Currency", value: currency, editable: true },
    { name: "Expiry Date", value: expiryDate, editable: true },
    { name: "Status", value: status, editable: true },
  ]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const formattedAmount =
    type === "percentage"
      ? `${amount}% off`
      : `${currency} ${amount.toFixed(2)}`;

  return (
    <>
      <Card area={area}>
        <Flex justifyContent="flex-end" $alignItems="center">
          <MenuButton onClick={handleModalOpen}>...</MenuButton>
        </Flex>
        <Flex flexDirection="column" gap="0.25rem">
          <Code>{code}</Code>
          {description && <Description>{description}</Description>}
          <Amount>{formattedAmount}</Amount>
          <Expiry>Expires on: {expiryDate}</Expiry>
          <StatusBadge status={status}>{status}</StatusBadge>
        </Flex>
      </Card>
      <SettingModal
        onRequestClose={handleModalClose}
        isOpen={isModalOpen}
        settings={settings}
        name={`Discount Code: ${code}`}
      />
    </>
  );
};

export default DiscountCard;

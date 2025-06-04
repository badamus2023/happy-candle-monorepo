import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../components/Common/Flex";
import SettingModal from "../Setting/SettingModal";
import { SettingItem } from "../../types/types";

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
  area,
  orderNumber,
  customerName,
  orderDate,
  totalAmount,
  currency = "USD",
  status = "Pending",
}) => {
  const formattedTotal = `${currency} ${totalAmount.toFixed(2)}`;
  const [isModalOpen, setModalOpen] = useState(false);

  const [settings, setSettings] = useState<SettingItem[]>([
    { name: "Order Number", value: orderNumber, editable: true },
    { name: "Customer Name", value: customerName, editable: true },
    { name: "Order Date", value: orderDate, editable: true },
    { name: "Total Amount", value: totalAmount, editable: true },
    { name: "Currency", value: currency, editable: true },
    { name: "Status", value: status, editable: true },
  ]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card area={area}>
        <Flex justifyContent="flex-end" $alignItems="center">
          <ToggleButton onClick={handleModalOpen}>...</ToggleButton>
        </Flex>
        <OrderHeader>
          <OrderNumber>Order #{orderNumber}</OrderNumber>
          <CustomerName>Customer: {customerName}</CustomerName>
          <OrderDate>Date: {orderDate}</OrderDate>
        </OrderHeader>

        <TotalAmount>Total: {formattedTotal}</TotalAmount>
        <StatusBadge status={status!}>{status}</StatusBadge>
      </Card>
      <SettingModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        name={`Order #${orderNumber}`}
        settings={settings}
      />
    </>
  );
};

export default OrderCard;

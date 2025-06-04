import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../components/Common/Flex";
import { SettingItem } from "../../types/types";
import SettingModal from "../Setting/SettingModal";
import MenuButton from "../../components/Common/MenuButton";

const Card = styled.div<{ area?: string }>`
  background-color: #ffffff;
  min-height: 5rem;
  min-width: 25rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;

  flex-direction: column;
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
}

const CustomerCard: React.FC<CustomerProps> = ({
  id,
  area,
  name,
  email,
  avatarUrl,
  joinedAt,
  status = "Active",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState<SettingItem[]>([
    { name: "Name", value: name, editable: true },
    { name: "Email", value: email, editable: true },
    { name: "Joined At", value: joinedAt || "N/A", editable: false },
    { name: "Status", value: status, editable: true },
  ]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card area={area}>
        <Flex justifyContent="flex-end" $alignItems="center">
          <MenuButton onClick={handleModalOpen}>...</MenuButton>
        </Flex>
        <Flex $alignItems="center" gap="1rem">
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
      </Card>
      <SettingModal
        onRequestClose={handleModalClose}
        isOpen={isModalOpen}
        settings={settings}
        name={`${name} settings`}
      />
    </>
  );
};

export default CustomerCard;

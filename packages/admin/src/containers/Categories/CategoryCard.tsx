import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../components/Common/Flex";
import MenuButton from "../../components/Common/MenuButton";
import SettingModal from "../Setting/SettingModal";
import { SettingItem } from "../../types/types";

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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState<SettingItem[]>([
    { name: "Name", value: name, editable: true },
    { name: "Description", value: description || "", editable: true },
    { name: "Image URL", value: imageUrl || "", editable: true },
    {
      name: "Product Count",
      value: productCount?.toString() || "0",
      editable: false,
    },
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
        {imageUrl && <CategoryImage src={imageUrl} alt={name} loading="lazy" />}
        <Name>{name}</Name>
        {description && <Description>{description}</Description>}
        {typeof productCount === "number" && (
          <Count>{productCount} products</Count>
        )}
      </Card>
      <SettingModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        settings={settings}
        name={`Category ${name} settings`}
      />
    </>
  );
};

export default CategoryCard;

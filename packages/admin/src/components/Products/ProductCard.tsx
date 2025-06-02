import styled from "styled-components";
import Flex from "../Common/Flex";
import { useState, useCallback } from "react";
import SettingModal from "../../containers/Setting/SettingModal";

const Card = styled.div<{ area?: string }>`
  background-color: #ffffff;
  border-radius: 1rem;
  min-height: 20rem;
  min-width: 20rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
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
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const stockText = inStock > 0 ? `${inStock} left in stock` : "Out of stock";

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card area={area}>
        <Flex flexDirection="column">
          <Flex justifyContent="flex-end" $alignItems="center">
            <ToggleButton onClick={handleModalOpen}>...</ToggleButton>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            $alignItems="center"
          >
            <ProductTitle>{title}</ProductTitle>
            <ProductImage src={imageUrl} alt={title} />
            <ProductPrice>{price}</ProductPrice>
            <StockCount>{stockText}</StockCount>
          </Flex>
        </Flex>
      </Card>
      <SettingModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        name={title}
      />
    </>
  );
};

export default ProductCard;

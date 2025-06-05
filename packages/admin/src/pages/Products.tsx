import styled from "styled-components";
import ProductCard from "../containers/Products/ProductCard";
import testCandle from "../assets/test-candle.jpg";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";
import AddProductModal from "../components/Forms/AddProduct/AddProductModal";
import { useState } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  align-items: start;
  grid-template-rows: masonry;
`;

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dummyProducts = [
    {
      id: "p001",
      area: "card1",
      title: "Sweet Candle",
      price: "12.00 zł",
      imageUrl: testCandle,
    },
    {
      id: "p002",
      area: "card2",
      title: "Red Lipstick Candy",
      price: "7.00 zł",
      imageUrl: testCandle,
    },
    {
      id: "p003",
      area: "card3",
      title: "Iron Man Candy",
      price: "17.00 zł",
      inStock: 5,
      imageUrl: testCandle,
    },
    {
      id: "p004",
      area: "card4",
      title: "Batman Candy",
      price: "14.00 zł",
      imageUrl: testCandle,
    },
  ];

  return (
    <>
      <PageTitle title="Products" />
      <GridContainer>
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            area={product.area}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            inStock={product.inStock}
          />
        ))}
      </GridContainer>
      <FloatingAddButton onClick={handleOpenModal} />
      <AddProductModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={() => alert("Submit")}
      />
    </>
  );
};

export default Products;

import styled from "styled-components";
import ProductCard from "../containers/Products/ProductCard";
import testCandle from "../assets/test-candle.jpg";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";
import AddProductModal, {
  NewProduct,
} from "../components/Forms/AddProduct/AddProductModal";
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

  const dummyProducts: NewProduct[] = [
    {
      title: "Sweet Candle",
      price: "12.00 zł",
      imageUrl: testCandle,
      inStock: "10",
      category: "Candles",
      sku: "SKU12345",
    },
    {
      title: "Red Lipstick Candy",
      price: "7.00 zł",
      imageUrl: testCandle,
      inStock: "10",
      category: "Candies",
      sku: "SKU67890",
    },
    {
      title: "Iron Man Candy",
      price: "17.00 zł",
      inStock: "5",
      category: "Candies",
      sku: "SKU54321",
      imageUrl: testCandle,
    },
    {
      title: "Batman Candy",
      price: "14.00 zł",
      inStock: "8",
      category: "Candies",
      sku: "SKU98765",
      imageUrl: testCandle,
    },
  ];
  const [products, setProducts] = useState(dummyProducts);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddProduct = (newProduct: NewProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    handleCloseModal();
  };

  return (
    <>
      <PageTitle title="Products" />
      <GridContainer>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            inStock={parseInt(product.inStock)}
          />
        ))}
      </GridContainer>
      <FloatingAddButton onClick={handleOpenModal} />
      <AddProductModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleAddProduct}
      />
    </>
  );
};

export default Products;

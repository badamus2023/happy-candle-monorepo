import styled from "styled-components";
import ProductCard from "../components/Products/ProductCard";
import testCandle from "../assets/test-candle.jpg";
import FloatingAddButton from "../components/Common/FloatingAddButton";

const ProductsGrid = styled.div`
  display: grid;
  align-items: start;
  grid-template-areas:
    "card1 card2 card3 card4"
    "card5 card6 card7 card8";
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
`;

const PageTitleContainer = styled.div`
  display: flex;
  border: 1px solid #bf7ca911;
  background-color: #f0f0f087;
  height: 5rem;
  border-radius: 1rem;
  align-items: flex-start;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
`;

const PageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #807cbf;
`;

const Products = () => {
  return (
    <>
      <PageTitleContainer>
        <PageTitle>Products</PageTitle>
      </PageTitleContainer>
      <ProductsGrid>
        <ProductCard
          id="1"
          area="card1"
          title="Sweet candle"
          price="12.00 zł"
          imageUrl={testCandle}
        />
        <ProductCard
          id="2"
          area="card2"
          title="Red Lipstick Candy"
          price="7.00 zł"
          imageUrl={testCandle}
        />
        <ProductCard
          id="3"
          area="card3"
          title="Iron Man Candy"
          price="17.00 zł"
          inStock={5}
          imageUrl={testCandle}
        />
        <ProductCard
          id="4"
          area="card4"
          title="Batman Candy"
          price="14.00 zł"
          imageUrl={testCandle}
        />
      </ProductsGrid>
      <FloatingAddButton />
    </>
  );
};

export default Products;

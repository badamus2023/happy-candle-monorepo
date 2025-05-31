import styled from "styled-components";
import ProductCard from "../components/Products/ProductCard";
import testCandle from "../assets/test-candle.jpg";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";

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
  return (
    <>
      <PageTitle title="Products" />
      <GridContainer>
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
      </GridContainer>
      <FloatingAddButton />
    </>
  );
};

export default Products;

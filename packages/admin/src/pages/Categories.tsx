import styled from "styled-components";
import CategoryCard from "../components/Categories/CategoryCard";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";
import AddCategoryModal from "../components/Forms/AddCategory/AddCategoryModal";
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

const CategoriesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <PageTitle title="Categories" />
      <GridContainer>
        <CategoryCard
          id="cat1"
          name="Candles"
          description="All kinds of scented candles"
          productCount={24}
          actions={[
            {
              label: "View Products",
              onClick: () => alert("View Products for Candles"),
            },
          ]}
        />
        <CategoryCard
          id="cat2"
          description="No more allergy in your house"
          name="Diffusers"
          productCount={8}
        />
        <CategoryCard
          id="cat3"
          name="Soaps"
          description="Handmade organic soaps"
          productCount={15}
        />
        <CategoryCard
          id="cat4"
          description="Relaxing bath bombs with essential oils"
          name="Bath Bombs"
          productCount={12}
        />
        <CategoryCard
          id="cat5"
          description="Handmade sprays to keep your room fresh"
          name="Room Sprays"
          productCount={5}
        />
        <CategoryCard id="cat6" name="Gift Sets" productCount={3} />
        <CategoryCard
          id="cat2"
          description="No more allergy in your house"
          name="Diffusers"
          productCount={8}
        />
      </GridContainer>
      <FloatingAddButton onClick={handleOpenModal} />
      <AddCategoryModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={() => alert("Category Added")}
      />
    </>
  );
};

export default CategoriesPage;

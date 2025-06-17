import styled from "styled-components";
import CategoryCard from "../containers/Categories/CategoryCard";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";
import AddCategoryModal, {
  NewCategory,
} from "../components/Forms/AddCategory/AddCategoryModal";
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
  const dummyCategories = [
    {
      id: "cat1",
      name: "Candles",
      description: "All kinds of scented candles",
      productCount: 24,
    },
    {
      id: "cat2",
      name: "Diffusers",
      description: "No more allergy in your house",
      productCount: 8,
    },
    {
      id: "cat3",
      name: "Soaps",
      description: "Handmade organic soaps",
      productCount: 15,
    },
    {
      id: "cat4",
      name: "Bath Bombs",
      description: "Relaxing bath bombs with essential oils",
      productCount: 12,
    },
    {
      id: "cat5",
      name: "Room Sprays",
      description: "Handmade sprays to keep your room fresh",
      productCount: 5,
    },
    {
      id: "cat6",
      name: "Gift Sets",
      productCount: 3,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState(dummyCategories);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddCategory = (newCat: NewCategory) => {
    setCategories((prev) => [
      { ...newCat, id: `cat${prev.length + 1}`, productCount: 0 },
      ...prev,
    ]);
  };

  return (
    <>
      <PageTitle title="Categories" />
      <GridContainer>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            productCount={category.productCount}
          />
        ))}
      </GridContainer>
      <FloatingAddButton onClick={handleOpenModal} />
      <AddCategoryModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleAddCategory}
      />
    </>
  );
};

export default CategoriesPage;

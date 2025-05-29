import CategoryCard from "../components/Categories/CategoryCard";
import Flex from "../components/Common/Flex";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";

const CategoriesPage = () => {
  return (
    <>
      <PageTitle title="Categories" />
      <Flex flexWrap="wrap" gap="1rem" alignItems="flex-start" ml mr>
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
      </Flex>
      <FloatingAddButton />
    </>
  );
};

export default CategoriesPage;

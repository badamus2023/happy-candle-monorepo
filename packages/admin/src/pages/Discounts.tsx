import styled from "styled-components";
import FloatingAddButton from "../components/Common/FloatingAddButton";
import PageTitle from "../components/Common/PageTitle";
import DiscountCard from "../containers/Discounts/DiscountsCard";
import AddDiscountModal from "../components/Forms/AddDiscount/AddDiscountModal";
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

const DiscountsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <PageTitle title="Discounts" />
      <GridContainer>
        <DiscountCard
          id="d001"
          code="SUMMER20"
          description="20% off all summer items"
          type="percentage"
          amount={20}
          expiryDate="2025-08-31"
          status="Active"
          actions={[
            {
              label: "Edit Discount",
              onClick: () => alert("Edit Discount"),
            },
            {
              label: "Delete Discount",
              onClick: () => alert("Delete Discount"),
            },
            {
              label: "Send to Customers",
              onClick: () => alert("Sent to Customers"),
            },
          ]}
        />
        <DiscountCard
          id="d002"
          code="WELCOME10"
          type="fixed"
          amount={10}
          currency="USD"
          expiryDate="2025-12-31"
          status="Active"
        />
        <DiscountCard
          id="d003"
          code="FREESHIP"
          description="Free shipping on orders over $50"
          type="fixed"
          amount={0}
          expiryDate="2025-06-30"
          status="Expired"
        />
        <DiscountCard
          id="d004"
          code="BLACKFRIDAY"
          type="percentage"
          amount={30}
          expiryDate="2025-11-29"
          status="Active"
        />
        <DiscountCard
          id="d005"
          code="VIP50"
          description="50% for VIP members"
          type="percentage"
          amount={50}
          expiryDate="2025-09-15"
          status="Active"
          actions={[{ label: "Send to VIPs", onClick: () => alert("Sent!") }]}
        />
      </GridContainer>
      <FloatingAddButton onClick={handleOpenModal} />
      <AddDiscountModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={() => alert("Discount Added")}
      />
    </>
  );
};

export default DiscountsPage;

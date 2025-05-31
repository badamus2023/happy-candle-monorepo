import styled from "styled-components";
import PageTitle from "../components/Common/PageTitle";
import OrderCard from "../components/Orders/OrdersCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  align-items: start;
  grid-template-rows: masonry;
`;

const dummyOrders = [
  {
    id: "o102",
    orderNumber: "1002",
    customerName: "Michael Green",
    orderDate: "2025-02-14",
    totalAmount: 125.5,
    currency: "USD",
    status: "Completed" as const,
  },
  {
    id: "o103",
    orderNumber: "1003",
    customerName: "Sofia Martínez",
    orderDate: "2025-03-01",
    totalAmount: 89.99,
    currency: "EUR",
    status: "Pending" as const,
  },
  {
    id: "o104",
    orderNumber: "1004",
    customerName: "Raj Patel",
    orderDate: "2025-03-22",
    totalAmount: 45.0,
    currency: "USD",
    status: "Cancelled" as const,
  },
  {
    id: "o105",
    orderNumber: "1005",
    customerName: "Ling Chen",
    orderDate: "2025-04-10",
    totalAmount: 210.75,
    currency: "USD",
    status: "Pending" as const,
  },
  {
    id: "o106",
    orderNumber: "1006",
    customerName: "Amélie Dubois",
    orderDate: "2025-05-05",
    totalAmount: 150.0,
    currency: "EUR",
    status: "Completed" as const,
  },
];

const OrdersPage = () => {
  return (
    <>
      <PageTitle title="Orders" />
      <GridContainer>
        {dummyOrders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            orderNumber={order.orderNumber}
            customerName={order.customerName}
            orderDate={order.orderDate}
            totalAmount={order.totalAmount}
            currency={order.currency}
            status={order.status}
            actions={[
              {
                label: "View Details",
                onClick: () => console.log("View Details", order.id),
              },
              {
                label: "Edit Order",
                onClick: () => console.log("Edit Order", order.id),
              },
              {
                label: "Cancel Order",
                onClick: () => console.log("Cancel Order", order.id),
                disabled: order.status !== "Pending",
              },
            ]}
          />
        ))}
      </GridContainer>
    </>
  );
};

export default OrdersPage;

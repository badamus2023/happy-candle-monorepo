import styled from "styled-components";
import PageTitle from "../components/Common/PageTitle";
import CustomerCard from "../components/Customers/CustomerCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  align-items: start;
  grid-template-rows: masonry;
`;

const CustomersPage = () => {
  const dummyCustomers = [
    {
      id: "c124",
      area: "customer-2",
      name: "John Smith",
      email: "john.smith@example.com",
      joinedAt: "2022-07-10",
      status: "Active" as const,
    },
    {
      id: "c125",
      area: "customer-3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      joinedAt: "2023-01-15",
      status: "Pending" as const,
    },
    {
      id: "c126",
      area: "customer-4",
      name: "Bob Williams",
      email: "bob.williams@example.com",
      joinedAt: "2022-12-03",
      status: "Inactive" as const,
    },
    {
      id: "c127",
      area: "customer-5",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      joinedAt: "2023-03-01",
      status: "Active" as const,
    },
    {
      id: "c128",
      area: "customer-6",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      joinedAt: "2022-09-27",
      status: "Active" as const,
    },
  ];

  return (
    <>
      <PageTitle title="Customers" />
      <GridContainer>
        {dummyCustomers.map((customer) => (
          <CustomerCard
            key={customer.id}
            id={customer.id}
            area={customer.area}
            name={customer.name}
            email={customer.email}
            joinedAt={customer.joinedAt}
            status={customer.status}
            actions={[
              {
                label: "View Orders",
                onClick: () => alert(`View Orders for ${customer.name}`),
              },
              {
                label: "Suspend",
                onClick: () => alert(`Suspend ${customer.name}`),
                disabled: customer.status !== "Active",
              },
              {
                label: "Message",
                onClick: () => alert(`Message ${customer.name}`),
              },
            ]}
          />
        ))}
      </GridContainer>
    </>
  );
};

export default CustomersPage;

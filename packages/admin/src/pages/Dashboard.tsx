import InformationCard from "../components/Dashboard/InformationCard";
import AlertCard from "../components/Dashboard/AlertCard";
import SalesChart from "../components/Dashboard/SalesChart";
import RecentOrdersTable from "../components/Dashboard/RecentOrdersTable";
import styled from "styled-components";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-areas:
    "card1 card2 card3 alert"
    "chart chart orders orders";
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

const Dashboard = () => {
  return (
    <>
      <PageTitleContainer>
        <PageTitle>Dashboard</PageTitle>
      </PageTitleContainer>
      <DashboardGrid>
        <InformationCard
          area="card1"
          title="Total Sales"
          value="1,296"
          backgroundColor="#bf7ca982"
        />
        <InformationCard
          area="card2"
          title="Revenue"
          value="12,050$"
          backgroundColor="#bf867c80"
        />
        <InformationCard
          area="card3"
          title="Active Customers"
          value="406"
          backgroundColor="#b57cbf84"
        />
        <AlertCard
          title="Low Stock Alert"
          warning="5 products are low on stock"
        ></AlertCard>
        <SalesChart area="chart" />
        <RecentOrdersTable area="orders" />
      </DashboardGrid>
    </>
  );
};

export default Dashboard;

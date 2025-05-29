import InformationCard from "../components/Dashboard/InformationCard";
import AlertCard from "../components/Dashboard/AlertCard";
import SalesChart from "../components/Dashboard/SalesChart";
import RecentOrdersTable from "../components/Dashboard/RecentOrdersTable";
import styled from "styled-components";
import PageTitle from "../components/Common/PageTitle";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-areas:
    "card1 card2 card3 alert"
    "chart chart orders orders";
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
`;

const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
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

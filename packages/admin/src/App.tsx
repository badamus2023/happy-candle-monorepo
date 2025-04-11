import styled from "styled-components";
import HappyCandleLogo from "./assets/happy-candle-logo.png";
import AlertLogo from "./assets/alert-svgrepo-com.svg?react";
import InformationCard from "./components/Dashboard/InformationCard";
import AlertCard from "./components/Dashboard/AlertCard";
import SalesChart from "./components/Dashboard/SalesChart";

const AppWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  height: 4.5rem;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid #bf7ca911;
`;

const SearchBarContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

const GlobalSearch = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 15rem;
  height: 3rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border: 1px solid #bf7ca911;
`;

const ProfileDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  background-color: #f0f0f0;
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

const Sidebar = styled.div`
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #bf7ca911;
  background: linear-gradient(to bottom, #ffffff, #bf7ca911);
`;

const SidebarTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9rem;
  border-bottom: 1px solid #bf7ca911;
  padding: 1rem;
`;

const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const Logo = styled.img`
  width: 4rem;
  height: 5rem;
  margin-bottom: 0.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 14px;
  align-self: flex-end;
  font-weight: bold;
  color: #bf7ca6;
`;

const SectionTitle = styled.div`
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  color: #807cbf;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div<{ active?: boolean }>`
  cursor: pointer;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 0.5rem;
  transition: color 0.2s ease;

  color: ${({ active }) => (active ? "#bf7ca6" : "inherit")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-decoration-color: #bf7ca6;
  text-underline-offset: 4px;

  &:hover {
    color: #bf7ca6;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-areas:
    "card1 card2 card3 alert"
    "chart chart orders orders";
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
`;

const StyledWarningIcon = styled(AlertLogo)`
  width: 50px;
  height: 50px;
  fill: #bf7ca6;
`;

function App() {
  return (
    <AppWrapper>
      <Sidebar>
        <SidebarTitleContainer>
          <Logo src={HappyCandleLogo} alt="Logo" />
          <TitleContainer>
            <Title>HappyCandle</Title>
            <Subtitle>Admin</Subtitle>
          </TitleContainer>
        </SidebarTitleContainer>
        <SidebarItemContainer>
          <SidebarSection>
            <SectionTitle>MAIN</SectionTitle>
            <SidebarItem active={true}>Dashboard</SidebarItem>
            <SidebarItem>Report</SidebarItem>
            <SidebarItem>Statistics</SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>Store Management</SectionTitle>
            <SidebarItem>Products</SidebarItem>
            <SidebarItem>Categories</SidebarItem>
            <SidebarItem>Discounts</SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>Orders</SectionTitle>
            <SidebarItem>Orders</SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>Users</SectionTitle>
            <SidebarItem>Customers</SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>System</SectionTitle>
            <SidebarItem>Settings</SidebarItem>
          </SidebarSection>
        </SidebarItemContainer>
      </Sidebar>
      <ContentWrapper>
        <Header>
          <SearchBarContainer>
            <GlobalSearch placeholder="Search..." />
            <ProfileDropdown />
          </SearchBarContainer>
        </Header>
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
          >
            <StyledWarningIcon />
          </AlertCard>
          <SalesChart area="chart" />
        </DashboardGrid>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;

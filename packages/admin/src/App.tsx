import styled from "styled-components";
import HappyCandleLogo from "./assets/happy-candle-logo.png";

const AppWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  height: 9rem;
  width: 100%;
  border-bottom: 1px solid #bf7ca911;
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
  height: 9rem;
  border-bottom: 1px solid #bf7ca911;
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
        <Header></Header>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;

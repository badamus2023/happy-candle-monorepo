import styled from "styled-components";
import HappyCandleLogo from "../../assets/happy-candle-logo.png";
import ProfileIcon from "../../assets/user.png";
import { Link, useRouterState } from "@tanstack/react-router";

const AppWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
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

const ProfileImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
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

  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
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

const SidebarItem = styled(Link)<{ active?: boolean }>`
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

const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  width: 100%;
  height: 3rem;
  border-top: 1px solid #bf7ca911;
  font-size: 0.75rem;
  color: #999;
`;

interface AuthedLayoutProps {
  children?: React.ReactNode;
}

const AuthedLayout: React.FC<AuthedLayoutProps> = ({ children }) => {
  const { pathname } = useRouterState().location;

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
            <SidebarItem to="/" active={pathname === "/"}>
              Dashboard
            </SidebarItem>
            <SidebarItem to="/report" active={pathname === "/report"}>
              Report
            </SidebarItem>
            <SidebarItem to="/statistics" active={pathname === "/statistics"}>
              Statistics
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>Store Management</SectionTitle>
            <SidebarItem to="/products" active={pathname === "/products"}>
              Products
            </SidebarItem>
            <SidebarItem to="/categories" active={pathname === "/categories"}>
              Categories
            </SidebarItem>
            <SidebarItem to="/discounts" active={pathname === "/discounts"}>
              Discounts
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>Orders</SectionTitle>
            <SidebarItem to="/orders" active={pathname === "/orders"}>
              Orders
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>Users</SectionTitle>
            <SidebarItem to="/customers" active={pathname === "/customers"}>
              Customers
            </SidebarItem>
          </SidebarSection>

          <SidebarSection>
            <SectionTitle>System</SectionTitle>
            <SidebarItem to="/settings" active={pathname === "/settings"}>
              Settings
            </SidebarItem>
          </SidebarSection>
        </SidebarItemContainer>
      </Sidebar>
      <ContentWrapper>
        <Header>
          <SearchBarContainer>
            <GlobalSearch placeholder="Search..." />
            <ProfileDropdown>
              <ProfileImage src={ProfileIcon} alt="Profile" />
            </ProfileDropdown>
          </SearchBarContainer>
        </Header>
        <MainContent>{children}</MainContent>
        <Footer>Happy Candle © 2025 by Bartosz Adamus</Footer>
      </ContentWrapper>
    </AppWrapper>
  );
};

export default AuthedLayout;

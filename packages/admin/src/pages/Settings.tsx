import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/Common/PageTitle";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 1rem;
  gap: 1rem;
`;

const SettingsSection = styled.div`
  background-color: #ffffff;
  width: fit-content;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding: 0.1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #5a5a75;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
  border-radius: 4px;
  font-size: 0.95rem;
`;

const Select = styled.select`
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
  border-radius: 4px;
  font-size: 0.95rem;
`;

const ToggleRow = styled.div`
  display: flex;
  margin-top: 0.5rem;
  padding: 0.1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin: 1rem;
  background: #7e57c2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background: #6930c3;
  }
`;

const SettingsPage: React.FC = () => {
  const [storeName, setStoreName] = useState<string>("HappyCandle");
  const [currency, setCurrency] = useState<string>("PLN");
  const [timezone, setTimezone] = useState<string>("Europe/Warsaw");

  const [ownerName, setOwnerName] = useState<string>("Admin");
  const [email, setEmail] = useState<string>("admin@happycandle.com");

  const [twoFA, setTwoFA] = useState<boolean>(false);
  const [enableReviews, setEnableReviews] = useState<boolean>(true);
  const [guestCheckout, setGuestCheckout] = useState<boolean>(false);
  const [maintenanceMode, setMaintenanceMode] = useState<boolean>(false);

  const handleSave = () => {
    console.log({
      storeName,
      currency,
      timezone,
      ownerName,
      email,
      twoFA,
      enableReviews,
      guestCheckout,
      maintenanceMode,
    });
    alert("Settings saved!");
  };

  return (
    <>
      <PageTitle title="Settings" />

      <SettingsContainer>
        <SettingsSection>
          <h2>General Settings</h2>
          <FormGroup>
            <Label htmlFor="storeName">Store Name</Label>
            <Input
              id="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="currency">Currency</Label>
            <Select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="PLN">PLN</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="timezone">Timezone</Label>
            <Select
              id="timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option>Europe/Warsaw</option>
              <option>UTC</option>
              <option>America/New_York</option>
            </Select>
          </FormGroup>
        </SettingsSection>

        <SettingsSection>
          <h2>Account Settings</h2>
          <FormGroup>
            <Label htmlFor="ownerName">Owner Name</Label>
            <Input
              id="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Contact Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </SettingsSection>

        <SettingsSection>
          <h2>Security & Features</h2>

          <ToggleRow>
            <Label htmlFor="twoFA">Two-Factor Authentication</Label>
            <input
              id="twoFA"
              type="checkbox"
              checked={twoFA}
              onChange={() => setTwoFA(!twoFA)}
            />
          </ToggleRow>

          <ToggleRow>
            <Label htmlFor="reviewsToggle">Enable Product Reviews</Label>
            <input
              id="reviewsToggle"
              type="checkbox"
              checked={enableReviews}
              onChange={() => setEnableReviews(!enableReviews)}
            />
          </ToggleRow>

          <ToggleRow>
            <Label htmlFor="guestCheckout">Guest Checkout</Label>
            <input
              id="guestCheckout"
              type="checkbox"
              checked={guestCheckout}
              onChange={() => setGuestCheckout(!guestCheckout)}
            />
          </ToggleRow>

          <ToggleRow>
            <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
            <input
              id="maintenanceMode"
              type="checkbox"
              checked={maintenanceMode}
              onChange={() => setMaintenanceMode(!maintenanceMode)}
            />
          </ToggleRow>
        </SettingsSection>
      </SettingsContainer>
      <Button onClick={handleSave}>Save All Settings</Button>
    </>
  );
};

export default SettingsPage;

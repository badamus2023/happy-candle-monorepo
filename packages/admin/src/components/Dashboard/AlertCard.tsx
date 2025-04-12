import React from "react";
import AlertLogo from "../../assets/alert-svgrepo-com.svg?react";
import styled from "styled-components";

const AlertCardContainer = styled.div`
  background-color: #f1f5c1;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const AlertTile = styled.div`
  font-size: 1.5rem;
  color: #2c2c2c;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`;

const AlertItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const AlertItem = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #2c2c2c;
  text-align: center;
`;

const StyledWarningIcon = styled(AlertLogo)`
  width: 50px;
  height: 50px;
  fill: #bf7ca6;
`;

interface AlertCardProps {
  title: string;
  warning: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ warning, title }) => {
  return (
    <AlertCardContainer>
      <StyledWarningIcon />
      <AlertTile>{title}</AlertTile>
      <AlertItemContainer>
        <AlertItem>{warning}</AlertItem>
      </AlertItemContainer>
    </AlertCardContainer>
  );
};

export default AlertCard;

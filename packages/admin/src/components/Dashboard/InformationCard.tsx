import styled from "styled-components";

const WidgetCard = styled.div<{ "background-color"?: string; area?: string }>`
  grid-area: ${(props) => props.area || "auto"};
  background-color: ${(props) => props["background-color"] || "#f0f0f0"};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const CardValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2c2c2c;
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #2c2c2c;
`;

interface InformationCardProps {
  title: string;
  value: string;
  area?: string;
  backgroundColor?: string;
}

const InformationCard: React.FC<InformationCardProps> = ({
  title,
  value,
  area,
  backgroundColor,
}) => {
  return (
    <WidgetCard background-color={backgroundColor} area={area}>
      <CardValue>{value}</CardValue>
      <CardTitle>{title}</CardTitle>
    </WidgetCard>
  );
};

export default InformationCard;

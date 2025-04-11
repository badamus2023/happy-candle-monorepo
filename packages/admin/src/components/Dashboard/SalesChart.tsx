import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesChartContainer = styled.div<{ area?: string }>`
  grid-area: ${(props) => props.area || "auto"};
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 35rem;
`;

const salesData = [
  { date: "Jan", sales: 1200 },
  { date: "Feb", sales: 1800 },
  { date: "Mar", sales: 1400 },
  { date: "Apr", sales: 2000 },
  { date: "May", sales: 1600 },
  { date: "Jun", sales: 2200 },
  { date: "Jul", sales: 1900 },
  { date: "Aug", sales: 2300 },
  { date: "Sep", sales: 2100 },
  { date: "Oct", sales: 2500 },
  { date: "Nov", sales: 2700 },
  { date: "Dec", sales: 3000 },
];

interface SalesChartProps {
  area?: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ area }) => {
  return (
    <SalesChartContainer area={area}>
      <h3 style={{ color: "#BF7CA9" }}>Monthly Sales Performance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#BF7CA9"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#BF7CA9" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </SalesChartContainer>
  );
};

export default SalesChart;

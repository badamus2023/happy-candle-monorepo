import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";

type RecentOrders = {
  id: number;
  customerName: string;
  orderDate: string;
  status: string;
};

interface RecentOrdersTableProps {
  area?: string;
}

const TableContainer = styled.div<{ area?: string }>`
  grid-area: ${(props) => props.area || "auto"};
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  overflow-x: auto;
  padding: 1.5rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  color: #374151;
  font-weight: 600;
  border-bottom: 2px solid #e5e7eb;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f5f9;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
`;

const recentOrdersData: RecentOrders[] = [
  {
    id: 1,
    customerName: "John Doe",
    orderDate: new Date("2023-10-01").toLocaleDateString(),
    status: "Shipped",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    orderDate: new Date("2023-10-02").toLocaleDateString(),
    status: "Pending",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    orderDate: new Date("2023-10-03").toLocaleDateString(),
    status: "Delivered",
  },
  {
    id: 4,
    customerName: "Bob Brown",
    orderDate: new Date("2023-10-04").toLocaleDateString(),
    status: "Cancelled",
  },
];

const columnHelper = createColumnHelper<RecentOrders>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span>ID</span>,
  }),
  columnHelper.accessor("customerName", {
    cell: (info) => info.getValue(),
    header: () => <span>Customer Name</span>,
  }),
  columnHelper.accessor("orderDate", {
    cell: (info) => info.getValue(),
    header: () => <span>Order Date</span>,
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: () => <span>Status</span>,
  }),
];

const RecentOrdersTable: React.FC<RecentOrdersTableProps> = ({ area }) => {
  const [data] = useState<RecentOrders[]>(recentOrdersData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer area={area}>
      <h3 style={{ color: "#BF7CA9", marginBottom: "1rem" }}>Recent Orders</h3>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default RecentOrdersTable;

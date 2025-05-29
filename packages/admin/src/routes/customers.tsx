import { createFileRoute } from "@tanstack/react-router";
import CustomersPage from "../pages/Customers";

export const Route = createFileRoute("/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CustomersPage />;
}

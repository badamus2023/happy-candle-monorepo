import { createFileRoute } from "@tanstack/react-router";
import OrdersPage from "../pages/Orders";

export const Route = createFileRoute("/orders")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OrdersPage />;
}

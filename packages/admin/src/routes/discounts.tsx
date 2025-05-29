import { createFileRoute } from "@tanstack/react-router";
import DiscountsPage from "../pages/Discounts";

export const Route = createFileRoute("/discounts")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DiscountsPage />;
}

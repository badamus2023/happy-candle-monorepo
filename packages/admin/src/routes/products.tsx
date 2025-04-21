import { createFileRoute } from "@tanstack/react-router";
import Products from "../pages/Products";

export const Route = createFileRoute("/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Products />;
}

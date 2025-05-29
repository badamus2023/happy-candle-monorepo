import { createFileRoute } from "@tanstack/react-router";
import CategoriesPage from "../pages/Categories";

export const Route = createFileRoute("/categories")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CategoriesPage />;
}

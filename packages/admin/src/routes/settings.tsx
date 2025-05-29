import { createFileRoute } from "@tanstack/react-router";
import SettingsPage from "../pages/Settings";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SettingsPage />;
}

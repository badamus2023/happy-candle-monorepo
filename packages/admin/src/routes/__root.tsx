import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AuthedLayout from "../components/Layout/AuthedLayout";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AuthedLayout>
        <Outlet />
      </AuthedLayout>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}

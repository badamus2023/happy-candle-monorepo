import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactModal from "react-modal";
import "./index.css";

import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "styled-components";

ReactModal.setAppElement("#root");

const router = createRouter({ routeTree });

const theme = {
  colors: {
    purple: "#807cbf",
    lightPurple: "#bf7ca9",
    darkPurple: "#5f4c8f",
    pink: "#bf7ca6",
    lightPink: "#bf7ca9",
    darkPink: "#8f5f7c",
  },
};

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

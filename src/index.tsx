import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MasaProvider } from "@masa-finance/masa-react";
import App from "./App";

const node = document.getElementById("root");

if (node) {
  const root = createRoot(node);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

  root.render(
    <React.StrictMode>
      <MasaProvider>
        <RouterProvider router={router} />
      </MasaProvider>
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

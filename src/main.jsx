import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ExtendDateProvider } from "./components/Calendar/context/ExtendDateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExtendDateProvider>
      <RouterProvider router={router} />
    </ExtendDateProvider>
  </React.StrictMode>
);

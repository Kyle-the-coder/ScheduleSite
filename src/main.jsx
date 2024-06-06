import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ExtendDateProvider } from "./components/Calendar/context/ExtendDateContext";
import { AuthProvider } from "./components/context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ExtendDateProvider>
        <RouterProvider router={router} />
      </ExtendDateProvider>
    </AuthProvider>
  </React.StrictMode>
);

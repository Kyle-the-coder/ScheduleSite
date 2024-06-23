import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ExtendDateProvider } from "./components/Calendar/calendarContext/ExtendDateContext";
import { AuthProvider } from "./components/context/AuthProvider";
import { BookNowProvider } from "./components/context/BookNowModal";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BookNowProvider>
        <ExtendDateProvider>
          <RouterProvider router={router} />
        </ExtendDateProvider>
      </BookNowProvider>
    </AuthProvider>
  </React.StrictMode>
);

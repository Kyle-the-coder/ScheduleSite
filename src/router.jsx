import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      //   { path: "/", ...landingRoute },
      //   { path: "/aboutUs", ...aboutUsRoute },
    ],
  },
]);

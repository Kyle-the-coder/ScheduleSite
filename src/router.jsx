import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { landingRoute } from "./pages/LandingPage/LpMain";
import { scheduleRoute } from "./pages/SchedulePage/SpMain";
import { aboutMeRoute } from "./pages/AboutMePage/AmMain";
import { servicesRoute } from "./pages/ServicesPage/SvMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },
      { path: "/schedule", ...scheduleRoute },
      { path: "/aboutme", ...aboutMeRoute },
      { path: "/services", ...servicesRoute },
    ],
  },
]);

import { useEffect, useState } from "react";
import { LandingPageMonitor } from "./LpMonitor/LandingPageMonitor";
import { LandingPagePhone } from "./LpPhone/LandingPagePhone";
import "./lpmain.css";

function LandingPageMain() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing-page-main-container">
      {windowWidth <= 600 ? <LandingPagePhone /> : <LandingPageMonitor />}
    </div>
  );
}

export const landingRoute = {
  element: <LandingPageMain />,
};

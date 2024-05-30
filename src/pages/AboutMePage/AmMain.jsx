import { useEffect, useState } from "react";
import "./ammain.css";
import { AboutMePagePhone } from "./AmPhone/AboutMePagePhone";
import { AboutMePageMonitor } from "./AmMonitor/AboutMePageMonitor";

function AboutMePageMain() {
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
      {windowWidth <= 600 ? <AboutMePagePhone /> : <AboutMePageMonitor />}
    </div>
  );
}

export const aboutMeRoute = {
  element: <AboutMePageMain />,
};

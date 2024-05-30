import { useEffect, useState } from "react";
import "./svmain.css";
import { ServicesPagePhone } from "./SvPhone.jsx/ServicesPagePhone";
import { ServicesPageMonitor } from "./SvMonitor.jsx/ServicesPageMonitor";

function ServicesPageMain() {
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
    <div className="services-page-main-container">
      {windowWidth <= 600 ? <ServicesPagePhone /> : <ServicesPageMonitor />}
    </div>
  );
}

export const servicesRoute = {
  element: <ServicesPageMain />,
};

import { useEffect, useState } from "react";
import { NavbarMonitor } from "./NbMonitor/NavbarMonitor";
import { NavbarPhone } from "./NbPhone/NavbarPhone";
import "./nbmain.css";

export function NavbarMain() {
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
    <div className="navbar-main-container">
      {windowWidth <= 600 ? <NavbarPhone /> : <NavbarMonitor />}
    </div>
  );
}

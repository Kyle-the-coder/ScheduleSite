import { useEffect, useState } from "react";
import { NavbarComp } from "./NavbarComp/NavbarComp";
import { NavbarPhone } from "./NavbarPhone/NavbarPhone";
import "./navbar.css";

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
      {windowWidth <= 600 ? <NavbarPhone /> : <NavbarComp />}
    </div>
  );
}

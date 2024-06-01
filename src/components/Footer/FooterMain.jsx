import { useEffect, useState } from "react";
import "./footermain.css";
import { FooterPhone } from "./FtPhone/FooterPhone";
import { FooterMonitor } from "./FtMonitor/FooterMonitor";

export function FooterMain() {
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
    <div className="footer-main-container">
      {windowWidth <= 600 ? <FooterPhone /> : <FooterMonitor />}
    </div>
  );
}

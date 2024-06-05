import { useEffect, useState } from "react";
import "./contactmemain.css";
import ContactMePhone from "./ContactMePhone/ContactMePhone";
import ContactMeMonitor from "./ContactMeMonitor/ContactMeMonitor";

export function ContactMeMain() {
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
    <div className="contact-me-main-container">
      {windowWidth <= 600 ? <ContactMePhone /> : <ContactMeMonitor />}
    </div>
  );
}

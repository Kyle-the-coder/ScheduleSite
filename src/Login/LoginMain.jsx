import { useEffect, useState } from "react";
import "./loginmain.css";
import LoginMonitor from "./LoginMonitor/LoginMonitor";
import LoginPhone from "./LoginPhone/LoginPhone";

function LoginMain() {
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
      {windowWidth <= 600 ? <LoginPhone /> : <LoginMonitor />}
    </div>
  );
}

export const loginRoute = {
  element: <LoginMain />,
};

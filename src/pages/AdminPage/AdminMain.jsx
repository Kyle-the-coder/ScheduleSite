import { useEffect, useState } from "react";
import "./adminmain.css";
import { AdminPhone } from "./AdminPhone/AdminPhone";
import { AdminMonitor } from "./AdminMonitor/AdminMonitor";

export default function AdminMain() {
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
    <div className="schedule-page-main-container">
      {windowWidth <= 600 ? <AdminPhone /> : <AdminMonitor />}
    </div>
  );
}

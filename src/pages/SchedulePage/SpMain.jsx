import { useEffect, useState } from "react";
import "./spmain.css";
import { SchedulePageMonitor } from "./SpMonitor/SchedulePageMonitor";

function SchedulePageMain() {
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
      {windowWidth <= 600 ? "" : <SchedulePageMonitor />}
    </div>
  );
}

export const scheduleRoute = {
  element: <SchedulePageMain />,
};

import React, { Suspense } from "react";
import blueCircle from "../../../assets/record.png";
import "./schedulepagemonitor.css";
import weights from "../../../assets/WakeUpWorkout.jpg";
import BannerMonitor from "../../../components/Banner/BannerMonitor/BannerMonitor";

const CalendarClient = React.lazy(() =>
  import("../../../components/Calendar/CalendarClient/CCMonitor/CalendarClient")
);

export function SchedulePageMonitor() {
  return (
    <div className="schedule-page-mont-main-container">
      <BannerMonitor
        img={weights}
        title={
          <h1 className=" m0 font3 f4 text-shadow">
            <span className="pinkText">S</span>chedule
          </h1>
        }
        desc="Find the right time and day for you"
        side={true}
        position="0 47%"
      />

      <div className="schedule-page-intro-container">
        <h2>
          View my schedule to select an available date and time for your
          appointment.
        </h2>
      </div>
      <div className="schedule-page-key-container">
        <div className="key-container">
          <h4 className="m0">Key:</h4>
        </div>
        <div className="key-container">
          <img src={blueCircle} className="blue-circle" />
          <h4 className="m0">: Appointments available on this day</h4>
        </div>
        <div className="key-container">
          <div className="blue-square"></div>
          <h4 className="m0">: Selected day</h4>
        </div>
        <div className="key-container">
          <div className="pink-circle"></div>
          <h4 className="m0">: Today</h4>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CalendarClient />
      </Suspense>
    </div>
  );
}

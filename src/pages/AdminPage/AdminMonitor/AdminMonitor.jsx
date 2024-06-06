import React, { Suspense } from "react";
import blueCircle from "../../../assets/record.png";
import "./adminmonitor.css";
import weights from "../../../assets/WakeUpWorkout.jpg";
import { BannerMonitor } from "../../../components/Banner/BannerMonitor/BannerMonitor";

// Dynamically import the components
const CalendarClient = React.lazy(() =>
  import("../../../components/Calendar/CalendarClient/CalendarClient")
);
const CalendarAdmin = React.lazy(() =>
  import("../../../components/Calendar/CalendarAdmin/CalendarAdmin")
);

export function AdminMonitor() {
  return (
    <div className="schedule-page-mont-main-container">
      <Suspense fallback={<div>Loading...</div>}>
        <BannerMonitor bannerImg={weights} />
      </Suspense>

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

      {/* Use Suspense to wrap the dynamically imported components */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <CalendarClient /> */}
        {/* Uncomment this line if you need CalendarAdmin */}
        <CalendarAdmin />
      </Suspense>
    </div>
  );
}

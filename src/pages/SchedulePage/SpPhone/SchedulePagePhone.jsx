import React, { Suspense } from "react";
import { BannerPhone } from "../../../components/Banner/BannerPhone/BannerPhone";
import weights from "../../../assets/WakeUpWorkout.jpg";

import blueCircle from "../../../assets/record.png";
import "./schedulepagephone.css";
import CalendarClientPhone from "../../../components/Calendar/CalendarClient/CCPhone/CCPhone";
const CalendarClient = React.lazy(() =>
  import("../../../components/Calendar/CalendarClient/CCPhone/CCPhone")
);

export function SchedulePagePhone() {
  return (
    <div className="schedule-page-phone-main-container">
      <BannerPhone bannerImg={weights} />
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

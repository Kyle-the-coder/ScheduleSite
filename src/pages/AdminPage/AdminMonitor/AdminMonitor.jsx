import React, { Suspense } from "react";
import blueCircle from "../../../assets/record.png";
import "./adminmonitor.css";
import weights from "../../../assets/WakeUpWorkout.jpg";
import { BannerMonitor } from "../../../components/Banner/BannerMonitor/BannerMonitor";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

// Dynamically import the components
const CalendarClient = React.lazy(() =>
  import("../../../components/Calendar/CalendarClient/CalendarClient")
);
const CalendarAdmin = React.lazy(() =>
  import("../../../components/Calendar/CalendarAdmin/CalendarAdmin")
);

export function AdminMonitor() {
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <div className="admin-page-mont-main-container">
      <Suspense fallback={<div>Loading...</div>}>
        <BannerMonitor bannerImg={weights} />
      </Suspense>

      <div className="admin-page-intro-container">
        <h2>Set up your Schedule below</h2>
        <button onClick={() => logout()} className="logout-button f1-2">
          Logout
        </button>
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

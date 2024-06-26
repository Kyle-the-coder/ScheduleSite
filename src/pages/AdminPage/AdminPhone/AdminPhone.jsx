import "./adminphone.css";

import weights from "../../../assets/WakeUpWorkout.jpg";
import BannerPhone from "../../../components/Banner/BannerPhone/BannerPhone";
import React, { Suspense } from "react";

const CalendarAdmin = React.lazy(() =>
  import("../../../components/Calendar/CalendarAdmin/CAPhone/CAPhone")
);
export function AdminPhone() {
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
      <BannerPhone
        img={weights}
        title={
          <h1 className=" m0 font3 f4 text-shadow">
            <span className="pinkText">A</span>bout Me
          </h1>
        }
        desc="Quick peak into my experience"
        side={true}
        position="0 47%"
      />
      <div className="admin-page-intro-container">
        <h2>Set up your Schedule below</h2>
        <button onClick={() => logout()} className="logout-button f1-2">
          Logout
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CalendarAdmin />
      </Suspense>
    </div>
  );
}

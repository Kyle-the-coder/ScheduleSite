import "./adminphone.css";

import weights from "../../../assets/WakeUpWorkout.jpg";
import { BannerPhone } from "../../../components/Banner/BannerPhone/BannerPhone";
export function AdminPhone() {
  return (
    <div className="schedule-page-phone-main-container">
      <BannerPhone bannerImg={weights} />
      <h1>Schedule page phone</h1>
    </div>
  );
}

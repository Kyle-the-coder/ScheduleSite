import weights from "../../../assets/weightsBlue.jpg";
import "./aboutmepagephone.css";
import { BannerPhone } from "../../../components/Banner/BannerPhone/BannerPhone";
export function AboutMePagePhone() {
  return (
    <div className="about-me-page-phone-main-container">
      <BannerPhone bannerImg={weights} bannerTxt={"About Me"} />
      <h1>about me phone</h1>
    </div>
  );
}

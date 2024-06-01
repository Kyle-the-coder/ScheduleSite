import weights from "../../../assets/weightsBlue.jpg";
import "./aboutmepagemonitor.css";
import { BannerMonitor } from "../../../components/Banner/BannerMonitor/BannerMonitor";
export function AboutMePageMonitor() {
  return (
    <div className="about-me-page-mont-main-container">
      <BannerMonitor bannerImg={weights} bannerTxt="About Me" />
      <h1>about me page mont</h1>
    </div>
  );
}

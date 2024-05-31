import weights from "../../../assets/yogaMat.jpg";
import "./servicespagemonitor.css";
import { BannerMonitor } from "../../../components/Banner/BannerMonitor/BannerMonitor";
export function ServicesPageMonitor() {
  return (
    <div className="services-page-mont-main-container">
      <BannerMonitor bannerImg={weights} />
      <h1>services page monitor</h1>
    </div>
  );
}

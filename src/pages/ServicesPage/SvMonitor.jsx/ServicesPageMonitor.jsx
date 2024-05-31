import { BannerMain } from "../../../components/Banner/BannerMain";
import weights from "../../../assets/weightsAndScale.jpg";
import "./servicespagemonitor.css";
export function ServicesPageMonitor() {
  return (
    <div className="services-page-mont-main-container">
      <BannerMain bannerImg={weights} />
      <h1>services page monitor</h1>
    </div>
  );
}

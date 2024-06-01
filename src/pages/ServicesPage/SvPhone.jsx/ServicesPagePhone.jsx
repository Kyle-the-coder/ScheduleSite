import { BannerPhone } from "../../../components/Banner/BannerPhone/BannerPhone";
import weights from "../../../assets/yogaMat.jpg";
import "./servicespagephone.css";
export function ServicesPagePhone() {
  return (
    <div className="services-page-phone-main-container">
      <BannerPhone bannerImg={weights} bannerTxt={"Services"} />
      <h1>Services page phone</h1>
    </div>
  );
}

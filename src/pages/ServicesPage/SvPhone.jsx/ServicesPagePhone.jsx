import BannerPhone from "../../../components/Banner/BannerPhone/BannerPhone";
import weights from "../../../assets/yogaMat.jpg";
import "./servicespagephone.css";
export function ServicesPagePhone() {
  return (
    <div className="services-page-phone-main-container">
      <BannerPhone
        img={weights}
        title={
          <h1 className=" m0 font3 f2-5 text-shadow">
            <span className="pinkText">S</span>ervices
          </h1>
        }
        desc="We provide some of the most reknown and up-to-date services to help you build strength and confidence"
        side={true}
        position="0 47%"
      />
      <h1>Services page phone</h1>
    </div>
  );
}

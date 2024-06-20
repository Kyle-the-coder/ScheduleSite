import weights from "../../../assets/weightsBlue.jpg";
import "./aboutmepagephone.css";
import BannerPhone from "../../../components/Banner/BannerPhone/BannerPhone";
export function AboutMePagePhone() {
  return (
    <div className="about-me-page-phone-main-container">
      <BannerPhone
        img={weights}
        title={
          <h1 className=" m0 font3 f2-5 text-shadow">
            <span className="pinkText">A</span>bout Me
          </h1>
        }
        desc="Quick peak into my experience"
        side={true}
        position="0 47%"
      />
      <h1>about me phone</h1>
    </div>
  );
}

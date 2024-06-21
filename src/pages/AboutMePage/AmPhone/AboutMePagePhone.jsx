import weights from "../../../assets/weightsBlue.jpg";
import headShot from "../../../assets/headshot.jpg";
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
      <div className="about-me-info-container-phone">
        <img src={headShot} className="about-me-headshot-phone" />
        <div className="about-me-title-container-phone">
          <h1 className="m0 font2  f-thin">Hello my name is</h1>
          <h1 className="m0 font3  name ">
            <span className="darkPinkText">S</span>abrina{" "}
            <span className="purpleText">M</span>itchell
          </h1>
        </div>
        <div className="about-me-info-phone">
          <p className="m0 f1-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Quisque fermentum
            justo eget nisl dapibus, nec venenatis justo malesuada. Curabitur
            vel libero nec nisi suscipit pharetra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque fermentum justo eget nisl
            dapibus, nec venenatis justo malesuada. Curabitur vel libero nec
            nisi suscipit pharetra. Quisque fermentum justo eget nisl dapibus,
            nec venenatis justo malesuada. Curabitur vel libero nec nisi
            suscipit pharetra.
          </p>
        </div>
      </div>
    </div>
  );
}

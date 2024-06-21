import weights from "../../../assets/weightsBlue.jpg";
import headShot from "../../../assets/headshot.jpg";
import BannerMonitor from "../../../components/Banner/BannerMonitor/BannerMonitor";
import "./aboutmepagemonitor.css";
export function AboutMePageMonitor() {
  return (
    <div className="about-me-page-mont-main-container">
      <BannerMonitor
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
      <div className="about-me-info-container">
        <img src={headShot} className="about-me-headshot" />
        <div className="about-me-title-container">
          <h1 className="m0 font2 f3 f-thin">Hello my name is</h1>
          <h1 className="m0 font3 f3">
            <span className="darkPinkText">S</span>abrina{" "}
            <span className="purpleText">M</span>itchell
          </h1>
        </div>
        <div className="about-me-info">
          <p className="m0 f2">
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

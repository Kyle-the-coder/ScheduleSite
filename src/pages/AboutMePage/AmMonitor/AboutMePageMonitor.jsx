import weights from "../../../assets/weightsBlue.jpg";
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
      <h1>about me page mont</h1>
    </div>
  );
}

import "./landingpagemonitor.css";
import bgImage from "../../../assets/workout.jpg";
import top10 from "../../../assets/review.png";
import quotes from "../../../assets/circle.png";
import { useNavigate } from "react-router-dom";
export function LandingPageMonitor() {
  const navigate = useNavigate();

  function handleBookApptButton() {
    navigate("/schedule");
  }
  return (
    <div className="landing-page-mont-main-container">
      <div className="landing-page-mont-opening-container">
        <img src={bgImage} className="landing-page-mont-bg-image" />
        <div className="vignette-mont-overlay"></div>
        <div className="landing-page-mont-quote-container">
          <h1 className="f4 m0">
            Exclusive <span className="pinkText"> Physical Training</span>{" "}
            Appointments
          </h1>
        </div>

        <div className="landing-page-mont-quote-container">
          <h4 className="f2-5 m0">
            Ease pain. Build strength. Gain confidence
          </h4>
        </div>

        <div className="landing-page-mont-quote-container">
          <button
            onClick={() => handleBookApptButton()}
            className="m0 landing-page-mont-button"
          >
            Book an Appointment
          </button>
        </div>

        <div className="landing-page-top-mont-award-container">
          <h4 className="font1 top-award-text">
            Sabrina is a top-tier trainer who exceeded my expectations and
            helped me get my life back." -Wendy H.
          </h4>
          <img src={top10} className="top-award-mont-image" />
          <img src={quotes} className="quotes-image" />
        </div>
      </div>
    </div>
  );
}

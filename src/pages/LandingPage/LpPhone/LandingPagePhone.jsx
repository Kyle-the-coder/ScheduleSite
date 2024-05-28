import bgImage from "../../../assets/workout.jpg";
import top10 from "../../../assets/top-10.png";
import quotes from "../../../assets/circle.png";
import "./landingpagephone.css";

export function LandingPagePhone() {
  return (
    <div className="landing-page-phone-main-container">
      <div className="landing-page-opening-container">
        <img
          src={bgImage}
          className="landing-page-phone-bg-image"
          alt="Background image of a workout session"
        />
        <div className="vignette-overlay"></div>
        <div className="landing-page-phone-quote-container">
          <h1 className="f4 m0">
            Exclusive <span className="pinkText"> PT </span> Appointments
          </h1>
        </div>

        <div className="landing-page-phone-quote-container">
          <h4 className="f2-5 m0">
            Ease pain. Build strength. Gain confidence
          </h4>
        </div>

        <div className="landing-page-phone-quote-container">
          <button
            className="m0 landing-page-phone-button"
            aria-label="Book an appointment for physical therapy"
          >
            Book an Appointment
          </button>
        </div>

        <div className="landing-page-top-award-container">
          <h4 className="font1 top-award-text">
            "Sabrina is a top-tier trainer who exceeded my expectations and
            helped me get my life back." -Wendy H.
          </h4>
          <img
            src={top10}
            className="top-award-image"
            alt="Top 10 award badge"
          />
          <img
            src={quotes}
            className="quotes-image"
            alt="Quotation mark icon"
          />
        </div>
      </div>
    </div>
  );
}

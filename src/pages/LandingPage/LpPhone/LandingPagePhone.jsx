import bgImage from "../../../assets/workout.jpg";
import top10 from "../../../assets/review.png";
import quotes from "../../../assets/circle.png";

import wakeUp from "../../../assets/wakeUp.jpg";
import experience from "../../../assets/experience.jpg";
import "./landingpagephone.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SliderPhone } from "../../../components/SliderTextDisplay/SliderPhone/SliderPhone";

export function LandingPagePhone() {
  const navigate = useNavigate();
  const [isFirstRender, setIsFirstRender] = useState(false);

  function handleBookApptButton() {
    navigate("/schedule");
  }
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
          <h4 className="f2 m0">Ease pain. Build strength. Gain confidence</h4>
        </div>

        <div className="landing-page-phone-quote-container">
          <button
            onClick={() => handleBookApptButton()}
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
      <div className="spacer"></div>

      <SliderPhone
        title={
          <h1 className="font3 m0">
            <span className="darkPinkText">H</span>elpful{" "}
            <span className="greenText">S</span>ervices
          </h1>
        }
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
      Curabitur..."
        buttonName="Services"
        leftOrRight={true}
        isFirstRender={isFirstRender}
        img={wakeUp}
        sliderId={1}
        isTopCurve={true}
        nav={"/services"}
      />

      <div className="landing-quote-container">
        <h1 className="font2  ">
          "My mission is to get you back on your feet, feeling independant, and
          feeling good about yourself and your body"
        </h1>
        <p className=" f1-5 m0">-Sabrina Mitchell(owner)</p>
      </div>

      <SliderPhone
        title={
          <h2 className="font3  m0">
            <span className="darkPinkText">20+</span> years of{" "}
            <span className="greenText">E</span>xperience
          </h2>
        }
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
      Curabitur vel..."
        buttonName="About Me"
        leftOrRight={false}
        isFirstRender={isFirstRender}
        img={experience}
        sliderId={2}
        isTopCurve={true}
        nav={"/aboutme"}
      />
    </div>
  );
}

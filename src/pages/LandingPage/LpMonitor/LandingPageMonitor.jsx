import "./landingpagemonitor.css";
import bgImage from "../../../assets/workout.jpg";
import top10 from "../../../assets/review.png";
import quotes from "../../../assets/circle.png";
import wakeUp from "../../../assets/wakeUp.jpg";
import experience from "../../../assets/experience.jpg";
import { useNavigate } from "react-router-dom";
import { SliderMonitor } from "../../../components/SliderTextDisplay/SliderMonitor/SliderMonitor";
import { useState } from "react";

export function LandingPageMonitor() {
  const navigate = useNavigate();
  const [isFirstRender, setIsFirstRender] = useState(false);

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
            Exclusive <span className="pinkAltText"> Physical Training</span>{" "}
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
            class="animated-button"
            onClick={() => handleBookApptButton()}
          >
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Book An Appointment</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
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

      <div className="spacer"></div>

      <SliderMonitor
        title={
          <h1 className="font3 f3 m0">
            <span className="darkPinkText">H</span>elpful{" "}
            <span className="greenText">S</span>ervices
          </h1>
        }
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper."
        buttonName="Services"
        leftOrRight={true}
        isFirstRender={isFirstRender}
        img={wakeUp}
        sliderId={1}
        isTopCurve={true}
        nav={"/services"}
      />

      <div className="landing-monitor-quote-container">
        <h1 className="font2 f2 ">
          "My mission is to get you back on your feet, feeling independant, and
          feeling good about yourself and your body"
        </h1>
        <p className=" f1-5 m0">-Sabrina Mitchell(owner)</p>
      </div>

      <SliderMonitor
        title={
          <h1 className="font3 f2 m0">
            <span className="darkPinkText">20+</span> years of{" "}
            <span className="greenText">E</span>xperience
          </h1>
        }
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper."
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

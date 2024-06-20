import bgImage from "../../../assets/workout.jpg";
import top10 from "../../../assets/review.png";
import quotes from "../../../assets/circle.png";

import wakeUp from "../../../assets/wakeUp.jpg";
import experience from "../../../assets/experience.jpg";
import "./landingpagephone.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SliderPhone } from "../../../components/SliderTextDisplay/SliderPhone/SliderPhone";
import { Button } from "../../../components/Button/Button";

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
          <Button
            bgc="rgb(65, 65, 65)"
            hoverColor="rgb(140, 43, 179)"
            fontSize="1.5rem"
            buttonName="Book An Appointment"
            nav="/schedule"
          />
        </div>

        <div className="landing-page-top-award-container">
          <div className="column">
            <h4 className="font1  top-award-text">
              Sabrina is a top-tier trainer who exceeded my expectations and
              helped me get my life back."
            </h4>
            <h4 className="m0 font1 f1-2">-Wendy H.</h4>
          </div>
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

      <div className="landing-phone-quote-container">
        <h2 className="font2  ">
          "My mission is to get you back on your feet, feeling independant, and
          feeling good about yourself and your body"
        </h2>
        <p className="f1-2 m0">-Sabrina Mitchell(owner)</p>
      </div>

      <SliderPhone
        title={
          <h3 className="font3  m0">
            <span className="darkPinkText">20+</span> years of{" "}
            <span className="greenText">E</span>xperience
          </h3>
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
      <div className="spacer-small"></div>
    </div>
  );
}

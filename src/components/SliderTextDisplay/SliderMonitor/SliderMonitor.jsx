import gsap from "gsap";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./slidermonitor.css";
import { useNavigate } from "react-router-dom";

export function SliderMonitor({
  title,
  paragraph,
  buttonName,
  leftOrRight,
  img,
  sliderId,
  isFirstRender,
  isTopCurve,
  nav,
}) {
  const [navState, setNavState] = useState(nav);
  const [ref, inView] = useInView({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFirstRender) {
      if (inView) {
        if (leftOrRight) {
          gsap.to(`.slider-img-${sliderId}`, {
            xPercent: 96,
            duration: 2,
            delay: 1,
          });
        } else if (!leftOrRight) {
          gsap.to(`.slider-img-${sliderId}`, {
            xPercent: -96,
            duration: 2,
            delay: 1,
          });
        }
      }
    }
  }, [inView]);

  return (
    <div
      className="slider-text-display-container"
      style={
        isTopCurve
          ? { borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }
          : {}
      }
    >
      {leftOrRight ? (
        <>
          <div className="slider-text-display" ref={ref}>
            {title}
            <p className="font2 f1-5 m0">{paragraph}</p>
            <button onClick={() => navigate(nav)} className="slider-button">
              {buttonName}
            </button>
          </div>
          <div className="slider-img-display">
            <img
              src={img}
              className={`${
                leftOrRight ? "left" : "right"
              } slider-img slider-img-${sliderId}`}
            />
          </div>
        </>
      ) : (
        <>
          <div className="slider-img-display">
            <img
              src={img}
              className={`${
                leftOrRight ? "left" : "right"
              } slider-img slider-img-${sliderId}`}
            />
          </div>
          <div className="slider-text-display" ref={ref}>
            {title}
            <p className="font2 f1-5">{paragraph}</p>
            <button onClick={() => navigate(nav)} className="slider-button">
              {buttonName}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

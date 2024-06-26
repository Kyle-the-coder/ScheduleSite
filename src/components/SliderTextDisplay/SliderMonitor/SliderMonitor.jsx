import gsap from "gsap";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./slidermonitor.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";

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
            <div className="slider-title">{title}</div>
            <div className="slider-paragraph">
              <p className="font2 f1-5 m0">{paragraph}</p>
            </div>

            <Button
              bgc="rgb(65, 65, 65)"
              hoverColor="rgb(140, 43, 179)"
              fontSize="1.3rem"
              marginTop="3%"
              padding="5px 40px 5px 40px"
              buttonName={buttonName}
              nav={nav}
            />
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
            <div className="slider-paragraph">
              <p className="font2 f1-5 ">{paragraph}</p>
            </div>
            <Button
              bgc="rgb(65, 65, 65)"
              hoverColor="rgb(140, 43, 179)"
              fontSize="1.3rem"
              padding="5px 40px 5px 40px"
              marginTop="3%"
              buttonName={buttonName}
              nav={nav}
            />
          </div>
        </>
      )}
    </div>
  );
}

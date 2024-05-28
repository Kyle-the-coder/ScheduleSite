import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieFile from "../assets/lottieFile.json";

function LottieAnimation({ isHamburgerActive, isAnimationActive }) {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieFile,
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const currentFrame = animRef.current.currentFrame;

    if (isAnimationActive === false) {
      animRef.current.playSegments([currentFrame, 0], true);
    } else if (isHamburgerActive) {
      animRef.current.playSegments([0, 43], true);
    }
  }, [isHamburgerActive, isAnimationActive]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
}

export default LottieAnimation;

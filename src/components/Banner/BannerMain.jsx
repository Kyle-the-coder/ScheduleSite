import { useEffect, useState } from "react";

export function BannerMain({ bannerImg }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="banner-main-container">
      {windowWidth <= 600 ? <SchedulePagePhone /> : <SchedulePageMonitor />}
    </div>
  );
}

import "./bannermonitor.css";

export function BannerMonitor({ bannerImg }) {
  return (
    <div className="banner-monitor-main-container">
      <img src={bannerImg} className="banner-monitor-img" />
    </div>
  );
}

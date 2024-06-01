import "./bannermonitor.css";

export function BannerMonitor({ bannerImg, bannerTxt }) {
  return (
    <div className="banner-monitor-main-container">
      <h1 className="banner-monitor-txt">{bannerTxt}</h1>
      <img src={bannerImg} className="banner-monitor-img" />
    </div>
  );
}

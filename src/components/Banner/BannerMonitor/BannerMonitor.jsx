import "./bannermonitor.css";

export default function BannerMonitor({ img, title, desc, side, position }) {
  return (
    <div className={`banner-main-container ${!side && "right"}`}>
      <div className="gradient-background"></div>
      <div className="banner-img-container">
        <img
          className="banner-img"
          src={img}
          style={{ objectPosition: position }}
        />
      </div>

      <div
        className="banner-info-container"
        style={{ alignItems: side ? "flex-start" : "flex-end" }}
      >
        <div className="banner-info">{title}</div>

        <h4 className="banner-info f1-2 text-shadow">{desc}</h4>
      </div>
    </div>
  );
}

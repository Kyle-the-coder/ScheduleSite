import "./bannermonitor.css";

export default function BannerMonitor({
  img,
  video,
  title,
  desc,
  side,
  position,
}) {
  return (
    <div
      className={`${img === null ? "video" : ""} banner-main-container ${
        !side && "right"
      } `}
    >
      {img === null ? (
        <video src={video} className="banner-img" autoPlay muted loop />
      ) : (
        <img
          className="banner-img"
          src={img}
          style={{ objectPosition: position }}
        />
      )}

      <div
        className={`${
          img === null ? "banner-info-container-vid" : "banner-info-container"
        }`}
        style={{ alignItems: side ? "flex-start" : "flex-end" }}
      >
        <h1
          className={`${
            img === null ? "banner-info-vid " : "banner-info plus"
          }`}
        >
          {title}
        </h1>
        <p className="banner-info">{desc}</p>
      </div>
    </div>
  );
}

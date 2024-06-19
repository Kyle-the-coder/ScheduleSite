import "./servicedisplaymonitor.css";

export default function ServiceDisplayMonitor({ title, paragraph }) {
  return (
    <div className="service-display-main-container">
      <div className="service-display-title-container">
        <div className="overline"></div>
        <h1 className="f2 font2">{title}</h1>
      </div>
      <div className="service-display-p-container">
        <p className="f1-2 ">{paragraph}</p>
      </div>
    </div>
  );
}

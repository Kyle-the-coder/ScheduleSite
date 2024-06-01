import "./footermonitor.css";
import yogaBall from "../../../assets/yoga-ball.png";
import yogaMat from "../../../assets/yoga-mat.png";
import yoga from "../../../assets/yoga.png";
import logo from "../../../assets/SabrinaLogoText.png";
import fb from "../../../assets/fb.png";
import insta from "../../../assets/insta.png";
export function FooterMonitor() {
  return (
    <div className="footer-monitor-main-container">
      <div className="footer-monitor-info-container">
        <h1 className="m0 font3 f2">Making a difference</h1>
        <h4 className="font2 f1-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nulla facilisi.
        </h4>
        <div className="footer-icon-container">
          <img className="footer-icon" src={yogaBall} />
          <img className="footer-icon" src={yoga} />
          <img className="footer-icon" src={yogaMat} />
        </div>
      </div>
      <div className="footer-monitor-info-container">
        <img className="footer-logo" src={logo} />
      </div>
      <div className="footer-monitor-info-container">
        <h1 className="font3 f2-5 m0">Socials:</h1>
        <div className="footer-socials-container">
          <img className="footer-social-icon pointer mr-5" src={fb} />
          <img className="footer-social-icon pointer" src={insta} />
        </div>
      </div>
    </div>
  );
}

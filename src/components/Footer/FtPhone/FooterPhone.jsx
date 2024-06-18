import "./footerphone.css";
import yogaBall from "../../../assets/yoga-ball.png";
import yogaMat from "../../../assets/yoga-mat.png";
import yoga from "../../../assets/yoga.png";
import logo from "../../../assets/SabrinaLogoText.png";
import fb from "../../../assets/fb.png";
import insta from "../../../assets/insta.png";
import { useNavigate } from "react-router-dom";
export function FooterPhone() {
  const navigate = useNavigate();
  function handleLoginNavigate() {
    navigate("/login");
  }
  return (
    <div className="footer-phone-main-container">
      <div className="footer-phone-info-container">
        <h1 className="m0 font3 f2">Making a difference</h1>
        <h4 className="font2 f1-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nulla facilisi.
        </h4>
        <div className="footer-phone-icon-container">
          <img
            className="footer-phone-icon"
            src={yogaBall}
            onClick={() => handleLoginNavigate()}
          />
          <img className="footer-phone-icon" src={yoga} />
          <img className="footer-phone-icon" src={yogaMat} />
        </div>
      </div>
      <div className="footer-phone-info-container">
        <img className="footer-phone-logo" src={logo} />
      </div>
      <div className="footer-phone-info-container">
        <h1 className="font3 f2-5 m0">Socials:</h1>
        <div className="footer-phone-socials-container">
          <img className="footer-phone-social-icon pointer mr-5" src={fb} />
          <img className="footer-phone-social-icon pointer" src={insta} />
        </div>
      </div>
    </div>
  );
}

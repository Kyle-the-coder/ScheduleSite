import { useNavigate } from "react-router-dom";
import logo from "../../../assets/SabrinaLogoText.png";
import "./navbarmonitor.css";

export function NavbarMonitor() {
  const navigate = useNavigate();

  function handleNavigation(link) {
    if (link === "/schedule") {
      navigate(link);
    }
  }

  const links = [
    { linkName: "About Me", link: "/aboutMe" },
    { linkName: "Services" },
    { linkName: "Schedule", link: "/schedule" },
    { linkName: "Contact Me" },
  ];
  return (
    <div className="navbar-mont-main-container">
      <div className="navbar-mont-logo-container">
        <img src={logo} className="navbar-mont-logo" />
      </div>
      <div className="navbar-mont-link-container">
        {links.map((link, index) => {
          return (
            <h3
              className="navbar-mont-link f1-8"
              key={link.linkName}
              onClick={() => handleNavigation(link.link)}
            >
              {link.linkName}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

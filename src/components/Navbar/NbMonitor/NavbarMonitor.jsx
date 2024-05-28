import logo from "../../../assets/solarLogo.jpeg";
import "./navbarcomp.css";

export function NavbarMonitor() {
  const links = [
    { linkName: "About Us" },
    { linkName: "Product" },
    { linkName: "Services" },
    { linkName: "Locations" },
    { linkName: "Contact Us" },
  ];
  return (
    <div className="navbar-comp-main-container">
      <div className="navbar-comp-logo-container">
        <img src={logo} className="navbar-comp-logo" />
      </div>
      <div className="navbar-comp-link-container">
        {links.map((link, index) => {
          return (
            <h3 className="navbar-comp-link" key={link.linkName}>
              {link.linkName}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

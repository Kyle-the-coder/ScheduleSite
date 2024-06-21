import { useEffect } from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";
export function Button({
  bgc,
  fontSize,
  hoverColor,
  buttonName,
  padding,
  marginTop,
  nav,
}) {
  const navigate = useNavigate();

  function findNav() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(nav);
  }

  return (
    <button
      onClick={() => findNav()}
      className="animated-button"
      style={{
        backgroundColor: bgc,
        fontSize: fontSize,
        padding: padding ? padding : "",
        marginTop: marginTop ? marginTop : "",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="arr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">{buttonName}</span>
      <span style={{ backgroundColor: hoverColor }} className="circle"></span>
      <svg
        viewBox="0 0 24 24"
        className="arr-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
}

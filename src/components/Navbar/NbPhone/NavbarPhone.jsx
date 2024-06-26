import { useEffect, useState } from "react";
import gsap from "gsap";
import logo from "../../../assets/SabrinaLogo.png";
import "./navbarphone.css";
import { useNavigate } from "react-router-dom";
import LottieAnimation from "../../LottieAnimation";

export function NavbarPhone() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);

  const navigate = useNavigate();

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
      setIsAnimtionActive(true);
    } else if (isHamburgerActive) {
      setIsAnimtionActive(false);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleNavigate(link) {
    setIsAnimtionActive(false);
    if (link === "/aboutme") {
      navigate(link);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    } else if (link === "/schedule") {
      navigate(link);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    } else if (link === "/services") {
      navigate(link);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleHomeNavigate() {
    setIsAnimtionActive(false);
    navigate("/");
    gsap.to(".navbar-phone-dropdown-main-container", {
      x: "-100%",
      duration: 1.4,
      ease: "power4.in",
      onComplete: () => {
        setIsHamburgerActive(false);
      },
    });
  }

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isHamburgerActive]);

  const links = [
    { linkName: "About Me", link: "/aboutme" },
    { linkName: "Services", link: "/services" },
    { linkName: "Schedule", link: "/schedule" },
    { linkName: "Contact Me" },
  ];

  return (
    <div className="navbar-phone-main-container">
      <img
        src={logo}
        className="navbar-logo"
        onClick={() => handleHomeNavigate()}
      />

      <div
        className="navbar-phone-hamburger"
        onClick={() => handleActivateHamburger()}
      >
        <LottieAnimation
          isHamburgerActive={isHamburgerActive}
          isAnimationActive={isAnimationActive}
        />
      </div>

      {isHamburgerActive && (
        <div className="navbar-phone-dropdown-main-container">
          {links.map((link, index) => {
            return (
              <div key={link.linkName}>
                <h3
                  className="dropdown-link-name"
                  onClick={() => handleNavigate(link.link)}
                >
                  {link.linkName}
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

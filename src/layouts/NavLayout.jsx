import { Outlet, useNavigation } from "react-router-dom";
import { NavbarMain } from "../components/Navbar/NbMain";
import "../styles/main.css";
import { FooterMonitor } from "../components/Footer/FtMonitor/FooterMonitor";
import { FooterMain } from "../components/Footer/FooterMain";
import ContactMe from "../components/ContactMe/ContactMeMonitor/ContactMeMonitor";
export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
      <NavbarMain />
      {state === "loading" ? (
        "loading..."
      ) : (
        <div>
          <Outlet />
        </div>
      )}
      <ContactMe />
      <FooterMain />
    </div>
  );
}

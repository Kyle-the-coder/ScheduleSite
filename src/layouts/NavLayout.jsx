import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { NavbarMain } from "../components/Navbar/NbMain";
import "../styles/main.css";
import { FooterMain } from "../components/Footer/FooterMain";
import { ContactMeMain } from "../components/ContactMe/ContactMeMain";

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
      <ContactMeMain />
      <FooterMain />
    </div>
  );
}

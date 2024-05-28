import { Outlet, useNavigation } from "react-router-dom";
import { NavbarMain } from "../components/Navbars/NavbarMain";
import "../styles/main.css";
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
    </div>
  );
}

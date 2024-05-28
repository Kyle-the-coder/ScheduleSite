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

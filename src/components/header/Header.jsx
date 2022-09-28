import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RouteContext } from "context";
import "./header.scss";

export default function Header() {
  const navBarRef = useRef(null);
  const navTogglerRef = useRef(null);
  const { routes } = useContext(RouteContext);

  const toggleNav = () => {
    const { ariaExpanded } = navTogglerRef.current;
    navBarRef.current.classList.toggle("show");
    navTogglerRef.current.ariaExpanded =
      ariaExpanded === "true" ? "false" : "true";
  };

  return (
    <header className="nav-header">
      <nav id="navbar" className="navbar navbar-expand-lg">
        <div className="container-xl">
          <NavLink to="/" className="navbar-brand">
            <img
              className="logo"
              alt="Logo"
              src="/assets/logo-dark.png"
              srcSet="/assets/logo-dark.png"
              loading="eager"
              width="40"
              height="auto"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
            ref={navTogglerRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" ref={navBarRef}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map((route, _id) => {
                return (
                  <li key={_id} className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={route.path}
                      onClick={toggleNav}
                    >
                      <div className="text-uppercase">{route.label}</div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

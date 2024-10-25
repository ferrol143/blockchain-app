import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";

//import images
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import { Link } from "react-router-dom";

const NavBar = ({isDark}) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

  const isDarkClass = isDark ? "navbar-light" : "";

  return (
    <React.Fragment>
      <span>
        <nav
          className={
            "navbar navbar-expand-lg fixed-top " + 
            isDarkClass +
            " sticky " +
            navClass
          }
          id="navbar"
        >
          <Container>
            <Link className="navbar-brand logo text-uppercase" to="/">
              {isDark ? (
                <>
                  <img
                    src={logoDark}
                    className="logo-light"
                    alt=""
                    height="22"
                  />
                  <img
                    src={logoDark}
                    className="logo-dark"
                    alt=""
                    height="22"
                  />
                </>
              ) : (
                <>
                  <img
                    src={logoDark}
                    className="logo-dark"
                    alt=""
                    height="22"
                  />
                  <img
                    src={logoLight}
                    className="logo-light"
                    alt=""
                    height="22"
                  />
                </>
              )}
            </Link>
            <NavbarToggler
              className="navbar-toggler"
              type="button"
              onClick={toggle}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
            <Collapse
              isOpen={isOpenMenu}
              className="navbar-collapse"
              id="navbarNav"
            >
              <Scrollspy
                offset={-18}
                items={[
                  "home",
                  "services",
                  "process",
                  "testimonial",
                  "sertificate"
                ]}
                currentClassName="active"
                className="navbar-nav ms-auto navbar-center d-xxl-flex flex-col align-items-xxl-center"
                id="mySidenav"
              >
                <li className="nav-item">
                  <NavLink href="#home">Beranda</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#services">Layanan</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#process">Cara Kerja</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#testimonial">Testimoni</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#sertificate">Cek Sertifikat</NavLink>
                </li>
                <div className="ms-2">
                  <Link to="/login" className="btn btn-primary">
                    Masuk
                  </Link>
                </div>
              </Scrollspy>
            </Collapse>
          </Container>
        </nav>
      </span>
    </React.Fragment>
  );
};

export default NavBar;

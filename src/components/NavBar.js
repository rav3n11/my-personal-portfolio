import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import lego from "../assets/icons/lego.svg";
import lego_white from "../assets/icons/lego-white.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

import { HashLink } from "react-router-hash-link";
import { AppContext } from "../App";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const theme = useContext(AppContext).theme;
  const setDarkMode = useContext(AppContext).setDarkMode;
  const setLightMode = useContext(AppContext).setLightMode;

  return (
    <Router>
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} ${theme}`}>
        <Container className="container-width container-height">
          <Navbar.Brand href="/">
            <div className="lego-housing">

            <img className="logo" src={theme === "light" ? lego : lego_white} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  `${activeLink === "home" ? "active navbar-link" : "navbar-link"} ${theme}`
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  `${activeLink === "skills" ? "active navbar-link" : "navbar-link"} ${theme}`
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  `${activeLink === "projects" ? "active navbar-link" : "navbar-link"} ${theme}`
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className={`social-icon`}>
                <a href="#">
                  <img className={theme} src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img className={theme} src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img className={theme} src={navIcon3} alt="" />
                </a>
              </div>
              <div className="hor-spacer"></div>
              <div
                className="social-icon"
                onClick={theme === "light" ? setDarkMode : setLightMode}
              >
                <div className={`social-icon-inner ${theme}`}>
                  {theme === "light" ? (
                    <BsFillMoonFill color="#000" />
                  ) : (
                    <BsSun color="#fff" />
                  )}
                </div>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

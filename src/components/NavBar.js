import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import lego from "../assets/icons/lego.svg";
import lego_white from "../assets/icons/lego-white.svg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
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
      <Navbar expand="md" className={`nav-style ${scrolled ? "scrolled" : ""} ${theme}`}>
        <Container className="container-width container-height container-justify">
          <Navbar.Brand href="/">
            <div className="lego-housing">
              <img
                className="logo"
                src={theme === "light" ? lego : lego_white}
                alt="Logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <AiOutlineMenu className={theme} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={`${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                } ${theme}`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`${
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                } ${theme}`}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`${
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                } ${theme}`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className={`social-icon`}>
                <a href="https://www.linkedin.com/in/bereket-terefe-2307701a1">
                  <BsLinkedin className={`social-img ${theme}`} />
                </a>
                <a href="https://github.com/rav3n11">
                  <BsGithub className={`social-img ${theme}`} />
                </a>
                <a href="https://t.me/Bereke_t">
                  <BsTelegram className={`social-img ${theme}`} />
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

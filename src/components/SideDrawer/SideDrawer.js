import React from "react";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <Link
        className="link"
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Main
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        About
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Resume
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  );
};

export default sideDrawer;

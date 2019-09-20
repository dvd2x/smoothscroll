import React, { Component } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton";
import '../sections/section-css/navigation.css'

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <div className="navbar_navigation">
          <div className="navbar_toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="nav_logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="spacer" />
          <div className="navbar_navigation-items">
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
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

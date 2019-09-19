import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import DavidImage from "../images/David3.png";
import "../sections/section-css/about.css";

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <h2>About</h2>
        <hr />
        <Grid>
          <Cell col={5} className="about-left-col">
            <div style={{ textAlign: "center" }}>
              <img className="about-image" src={DavidImage} alt="David" />
            </div>
          </Cell>
          <Cell col={7} className="about-right-col">
            <p
              style={{
                fontSize: "18px",
                textAlign: "justify",
                fontFamily: "oxygen"
              }}
            >
              My name is David Piper, I'm a Full-Stack Web Developer from
              Detroit. I love to create and build websites which are
              mobile-first ready, fully responsive, minimal, SEO friendly and at
              the same time attractive and user-friendly for individuals,
              startups, businesses etc. I built my portfolio site from the
              grounds up by using all the skills that I know. I also have some
              fairly basic knowledge of Web/Graphic Design. I'm always motivated
              and have the desire to learn more.
              <br />
              <br />
              While I'm not debugging some code or trying to position elements
              right, I love to hang out with my friends, play video games,
              listen to music, photograph-ing, eating pizzas etc.
            </p>
            <hr style={{ borderTop: "3px solid #000120", width: "50%" }} />
            <h4>Address</h4>
            <p
              style={{
                fontSize: "17px",
                textAlign: "justify",
                fontFamily: "oxygen"
              }}
            >
              18093 Parkside St, Detroit MI 48221
            </p>
            <h4>Phone</h4>
            <p
              style={{
                fontSize: "17px",
                textAlign: "justify",
                fontFamily: "oxygen"
              }}
            >
              (313) 848-6804
            </p>
            <h4>Email</h4>
            <p
              style={{
                fontSize: "17px",
                textAlign: "justify",
                fontFamily: "oxygen"
              }}
            >
              piperd@comcast.net
            </p>
            <p className="download">
              <button
                style={{
                  fontSize: "19px",
                  textAlign: "justify",
                  fontFamily: "oxygen"
                }}
              >
                <a
                  className="button"
                  target="_blank"
                  href="https://docs.google.com/document/d/1nqD8rLYoO8H9eMO64VXku66eBCq8g34GuzXB4r2dzCs/edit"
                >
                  <i className="fa fa-download"></i> Download Resume
                </a>
              </button>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;

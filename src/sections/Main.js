import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import me from "../images/David1.png";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={me} alt="david" className="david-img" id="profile-pic" />
          </Cell>

          <div className="banner-text" id="banner">
            <h1>Full Stack Developer</h1>
            <hr />
            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Postgres</p>
            <div className="social-links">
              {/*LinkedIn*/}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*Github*/}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/*Twitter*/}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Main;

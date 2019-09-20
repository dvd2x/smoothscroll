import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
//import me from "../images/David1.png";
import '../sections/section-css/main.css'

class Main extends Component {
  render() {
    return (
      <div className="main-section" id="main">
        <Grid className="landing-grid">
         {/*} <Cell col={12}>
            <img src={me} alt="david" className="david-img" id="profile-pic" />
    </Cell>*/}

          <div className="banner-text" id="banner">
            <h1>I'm David Piper.</h1>
            <h3 className='description'>I'm a Detroit Michigan based Full Stack Developer. I like dabbling in  various parts of frontend development, backend development and I love to learn about new technologies and adding those new technologies to my projects.</h3>
            <hr />
            <h3>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Postgres</h3>
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

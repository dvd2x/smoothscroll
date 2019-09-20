import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../images/logo.png";
import './section-css/footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-section" id="footer">
        <div className="social-links-footer">
          {/*LinkedIn*/}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/*Github*/}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/*Twitter*/}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
        </div>
        <div
          className="footer-text"
        >
          <p>Copyright © 2019 | Coded By David Piper</p>
        </div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../sections/section-css/resume.css";

class Experience extends Component {
  render() {
    return (
      <div>
        <Grid className="experience-divider">
          <Cell col={1} className="experience-left-col">
            <h2>{this.props.experience}</h2>
            <p style={{ fontSize: "18px" }} className="year">
              <div className="spacer" />
            </p>
          </Cell>
          <Cell col={12} style={{ marginTop: "0px" }}>
            <h4>{this.props.jobName}</h4>
            <p>
              {this.props.startYear} {this.props.endYear}
            </p>
            <p style={{ fontSize: "18px" }}>{this.props.jobDescription}</p>
          </Cell>
          <hr />
        </Grid>
      </div>
    );
  }
}

export default Experience;

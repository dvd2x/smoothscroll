import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <div>
        <Grid className="experience-divider">
          <Cell col={4} className="experience-left-col">
            <p style={{ fontSize: "18px" }} className="year">
              {this.props.startYear} {this.props.endYear}
              {this.props.image}
            </p>
          </Cell>
          <Cell col={8} style={{ marginTop: "0px" }}>
            <h4>{this.props.jobName}</h4>
            <p style={{ fontSize: "18px" }}>{this.props.jobDescription}</p>
          </Cell>
          <hr />
        </Grid>
      </div>
    );
  }
}

export default Experience;

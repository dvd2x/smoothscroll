import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "./section-css/resume.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="resume">
          <h2>Work/Education</h2>
          <hr />
          <Grid>
            <Cell col={2} className="resume-left">
              <div style={{ textAlign: "center" }}>
                <Education education={"Education"} />
              </div>
            </Cell>
            <Cell
              className="resume-right-col info"
              style={{ textAlign: "justify" }}
              col={10}
            >
              <div className="spacer" />
              <Education
                className="description"
                startYear={1998}
                endYear={2000}
                schoolName={"Delaware State University"}
                schoolDescription="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain."
              />

              <Education
                startYear={1996}
                endYear={1998}
                schoolName={"Delaware Technical & Community College"}
                schoolDescription="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;"
              />
            </Cell>
            <Grid>
              <Cell col={2} className="resume-left">
                <div style={{ textAlign: "center" }}>
                  <Experience experience={"Experience"} />
                </div>
              </Cell>
              <Cell
                className="resume-right-col info"
                style={{ textAlign: "justify" }}
                col={10}
              >
                <div className="spacer" />

                <Experience
                  startYear={2019}
                  endYear={"present"}
                  jobName="Thinkful"
                  jobDescription="Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures. Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer."
                />

                <Experience
                  startYear={2016}
                  endYear={"present"}
                  jobName="Gp Strategies"
                  jobDescription="Reviewed performance reports and documentation from customers and field engineers, and completed root cause analysis on trucks, assembly procedure, and test equipment. Inspected malfunctioning and damaged products to determine problem. Given support to plant assembly management for electrical quality control issues."
                />
              </Cell>
            </Grid>
          </Grid>
          <div className="skills">
            <h2 classId="skills">Skills</h2>
            <hr />
            <div className="talents">
              <Skills skill="HTML/CSS" progress={100} />
              <Skills skill="Javascript" progress={75} />
              <Skills skill="NodeJS" progress={50} />
              <Skills skill="React" progress={25} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;

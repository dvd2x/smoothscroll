import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="resume">
          <h2>Work/Education</h2>
          <hr />
          <Grid>
            <Cell col={4} className="resume-left">
              <div style={{ textAlign: "center" }}>
                <h4>EDUCATION</h4>
                <hr
                  style={{
                    borderTop: "3px solid #000120",
                    paddingBottom: "39em"
                  }}
                />
              </div>
              <h4 style={{ textAlign: "center" }}>WORK</h4>
              <hr
                style={{
                  borderTop: "3px solid #000120",
                  textAlign: "center",
                  paddingBottom: "22em"
                }}
              />
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              <Education
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
              <hr style={{ borderTop: "3px solid #fff" }} />
              <h2>Experience</h2>

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
          <div className="skills">
            <h2 classId="skills">Skills</h2>
            <hr />
            <Grid className="skill-list">
              <Cell col={2}>
                <h4>DEVELOPMENT</h4>
              </Cell>
              <Cell className="skills-col1" col={2}>
                <ul>
                  <li>
                    <p>HTML5</p>
                  </li>
                  <li>
                    <p>CSS3</p>
                  </li>
                  <li>
                    <p>JavaScript</p>
                  </li>
                  <li>
                    <p>React</p>
                  </li>
                </ul>
              </Cell>
              <Cell className="skills-col1" col={2}>
                <ul>
                  <li>
                    <p>NodeJS</p>
                  </li>
                  <li>
                    <p>Redux</p>
                  </li>
                  <li>
                    <p>Git</p>
                  </li>
                  <li>
                    <p>jQuery</p>
                  </li>
                </ul>
              </Cell>
              <Cell col={2}>
                <h4 style={{ textAlign: "center" }}>DESIGN</h4>
              </Cell>
              <Cell className="skills-col1" col={4}>
                <ul>
                  <li>
                    <p>Adobe Photoshop</p>
                  </li>
                  <li>
                    <p>Adobe Illustrator</p>
                  </li>
                  <li>
                    <p>Adobe Fireworks</p>
                  </li>
                  <li>
                    <p>Adobe After Effects</p>
                  </li>
                </ul>
              </Cell>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;

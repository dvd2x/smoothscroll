import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";
import './section-css/projects.css'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="parkside-bags-bg card-bg ">
              Parkside Bags
            </CardTitle>
            <CardText>Technologies: Shopify, CSS3, HTML5, JavaScript</CardText>
            <CardActions border>
              <div className="card-nav">
                <Button colored>
                  <a href="https://parksidebags.com/" target="_blank">
                    Website
                  </a>
                </Button>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Javascript Projects are Comming Soon! :)
          </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/*REACT Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="burger-builder-bg card-bg ">
              Burger Builder
            </CardTitle>
            <CardText>
              Technologies: ReactJS, JavaScript, Redux, React Router,
              Redux-Thunk, Firebase, CSS3, HTML5
            </CardText>
            <CardActions border>
              <div className="card-nav">
                <Button colored>
                  <a
                    href="https://dvd2x.github.io/burger-builder/"
                    target="_blank"
                  >
                    Website
                  </a>
                </Button>
                <Button colored>
                  <a
                    href="https://github.com/dvd2x/burger-builder"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*REACT Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="wise-note-bg card-bg ">
              Wise Note App
            </CardTitle>
            <CardText>
              Technologies: ReactJS, JavaScript, Redux, React Router, CSS3,
              HTML5
            </CardText>
            <CardActions border>
              <div className="card-nav">
                <Button colored>
                  <a href="https://dvd2x.github.io/wisenote/" target="_blank">
                    WEBSITE
                  </a>
                </Button>
                <Button colored>
                  <a href="https://github.com/dvd2x/wisenote" target="_blank">
                    GITHUB
                  </a>
                </Button>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*REACT Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="portfolio-bg card-bg ">Portfolio</CardTitle>
            <CardText>
              Technologies: ReactJS, JavaScript, React-MDL, CSS3, HTML5
            </CardText>
            <CardActions border>
              <div className="card-nav">
                <Button colored>
                  <a href="https://dvd2x.github.io/portfolio/" target="_blank">
                    WEBSITE
                  </a>
                </Button>
                <Button colored>
                  <a href="https://github.com/dvd2x/portfolio" target="_blank">
                    GITHUB
                  </a>
                </Button>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/*API Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="quiz-bg card-bg">
              8th Grade Math Quiz App
            </CardTitle>
            <CardText>
              Technologies: RestfulAPI, JavaScript, CSS3, HTML5, Adobe
              Illustrator, Adobe Photoshop
            </CardText>
            <CardActions border>
              <div className="card-nav">
                <Button colored>
                  <a href="https://dvd2x.github.io/quiz-app/" target="_blank">
                    WEBSITE
                  </a>
                </Button>
                <Button colored>
                  <a href="https://github.com/dvd2x/quiz-app" target="_blank">
                    GITHUB
                  </a>
                </Button>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*API Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle className="utubegrabber-bg card-bg">
              UTube Grabber
            </CardTitle>
            <CardText>
              Technologies: RestfulAPI, JavaScript, CSS3, HTML5, Adobe
              Illustrator, Adobe Photoshop
            </CardText>
            <CardActions border>
              <div className="card-nav">
                <Button colored>
                  <a
                    href="https://dvd2x.github.io/UTubeGrabber/"
                    target="_blank"
                  >
                    WEBSITE
                  </a>
                </Button>
                <Button colored>
                  <a
                    href="https://github.com/dvd2x/UTubeGrabber"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </Button>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="projects-section" id="projects">
        <h2>Recent Projects</h2>
        <hr />
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>API</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

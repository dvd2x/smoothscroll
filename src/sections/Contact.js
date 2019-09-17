import React, { Component } from "react";
import { Grid, ListItem, List, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <hr />
        <Grid className="contact-grid">
          <div className="contact-list">
            <List className="contact" style={{ display: "flex" }}>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (313) 848-6804
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton",
                    float: "right"
                  }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  piperd@comcast.net
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-skype" aria-hidden="true" />
                  live:availablegeeks
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Contact;

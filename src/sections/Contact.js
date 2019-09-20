import React, { Component } from "react";
import { Grid, Cell, ListItem, List, ListItemContent } from "react-mdl";
import './section-css/contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <hr />
        <Grid className="contact-grid">
          <div className="contact-list">
            <List className="contact">
              <div className="content">
                <Cell col={8}>
                  <ListItem>
                    <ListItemContent className="content-list">
                      <div className="space">
                        <i
                          className="fa fa-phone-square icon"
                          aria-hidden="true"
                        />
                        <h4>Phone:</h4>
                        <p>(313) 848-6804</p>
                      </div>
                    </ListItemContent>
                  </ListItem>
                </Cell>

                <Cell col={8}>
                  <ListItem>
                    <ListItemContent className="content-list">
                      <i className="fa fa-envelope icon" aria-hidden="true" />
                      <h4>E-mail:</h4>
                      <p>piperd@comcast.net</p>
                    </ListItemContent>
                  </ListItem>
                </Cell>

                <Cell col={8}>
                  <ListItem>
                    <ListItemContent className="content-list">
                      <i className="fa fa-skype icon" aria-hidden="true" />
                      <h4>Skype:</h4>
                      <p>live:availablegeeks</p>
                    </ListItemContent>
                  </ListItem>
                </Cell>
              </div>
            </List>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Contact;

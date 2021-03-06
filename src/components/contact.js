import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
         <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent  className="contact-itemlist">
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 9594362167
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent  className="contact-itemlist">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mandeepdk123@gmail.com
                  </ListItemContent>
                </ListItem>

               


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;


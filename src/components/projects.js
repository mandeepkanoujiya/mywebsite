import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    
  }
  
  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              I have created a React personal portfolio project.The technologies used to build a page HTML,CSS,BOOTSTRAP,REACT JS and NODE JS.
            </CardText>
            <CardActions border style={{justifyContent: 'center'}}>
            
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        
          <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmwR6RSCpLaGqLC80UYVANmJUoL0gf9NF4ndLCA2Gdh76zQIbz&usqp=CAU) center / cover'}} >Ecommerce Website #2</CardTitle>
            <CardText>
              I have created a ecommerce mobile shopping website.The technologies used to build a website HTML,CSS,JAVASCRIPT,JQUERY & BOOTSTRAP.
            </CardText>
            <CardActions border>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbVQ2ZMrmNjU1LdQR_xY1NbUbollcQj57pdXZH2WBguJNNms3x&usqp=CAU) center / cover'}} >Responsive Website #3</CardTitle>
            <CardText>
              I have created a many responsive website using HTML,CSS & JAVASCRIPT. 
            </CardText>
            <CardActions border>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
           </div>
        </div>
      )
    } 

  }



  render() {
    return(
      <div className="tabs-font">
        <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className="tab-size">React</Tab>
          <Tab className="tab-size">Ecommerce Website</Tab>
          <Tab className="tab-size">Responsive Product</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;


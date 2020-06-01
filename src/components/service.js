import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, CardMenu, IconButton } from 'react-mdl';


class Service extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
     
      return (
        
        <div className="service-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} ></CardTitle>
          <CardText>I can create React Application with technologies like: HTML,CSS,BOOTSTRAP,REACT JS,NODE JS.</CardText>
          
          <CardActions border>
           
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      
    )
    } else if(this.state.activeTab === 1) {
      return (
        
          <div className="service-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4-KE6rbVMmOdGOflTnntsABx60Cx_Jh5gsUgN92VK7H_i1dmX&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>
              I can create Web Applications with technologies like: HTML, CSS, SASS, JAVASCRIPT, JQUERY, JSON, AJAX, APIS.            
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
        
          <div className="service-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRfjUQ5FXnJ5ivoBfEewlDNQufDw9Samx8EgJH4iYYE4rT7mpE&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>I can create Responsive Websites by PSD conversion with technologies like: HTML, CSS, SASS, JAVSCRIPT, JQUERY, BOOTSTRAP.</CardText>
            
            <CardActions border>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } 
    else if(this.state.activeTab === 3) {
      return(
        <div className="service-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyztgWzCVPx5EAs4USQhDBJ2fNqWBLd7a2LWsPUN8_c875DAkl&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>
              I can create Websites with technologies like: HTML, CSS, SASS, CSS-GRID, CSS-FLEXBOX, CSS-ANIMATIONS.
            </CardText>
            <CardActions border>
             
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
      
    } 

  }



  render() {
    return(
      <div className="tabs-font">
        <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className="tab-size">REACT APPLICATION</Tab>
          <Tab className="tab-size">WEB APPLICATION</Tab>
          <Tab className="tab-size">PSD TO RESPONSIVE WEBSITES</Tab>
          <Tab className="tab-size">WEB DESIGN</Tab>
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

export default Service;


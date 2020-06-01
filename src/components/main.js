import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Projects from './projects';
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Service from './service';
import MyWebsite from './mywebsite';


const Main = () => (
    <Switch>
        <Route default exact path="/" component={MyWebsite}/>
        <Route path="/mywebsite" component={MyWebsite}/>
        <Route path="/projects" component={Projects} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
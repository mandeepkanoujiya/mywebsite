import React from 'react';
import './App.css';
import { Layout,Navigation,Drawer,Content,Header } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from './components/footer';





function App() {
  return (
      <div className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-color" title={<span><strong>My Portfolio</strong></span>}>
            <Navigation> 
                <Link path="/" to="/mywebsite">Home</Link>  
                <Link to="/projects">Projects</Link>  
                <Link to="/resume">Resume</Link>
                <Link to="/service">Services</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
           </Navigation>
        </Header>
  <Drawer title={<span><strong>My Portfolio</strong></span>}>
  <Navigation>
     <Link to="/mywebsite" className="">Home</Link>
     <Link to="/projects" className="">Projects</Link>
     <Link to="/resume" className="">Resume</Link>
     <Link to="/service" className="">Services</Link>
     <Link to="/aboutme" className="">About</Link>
     <Link to="/contact" className="">Contact</Link>
  </Navigation>
     </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
      
 
  
        <div className="demo-foot-content">
        <Footer/>
        </div>
    </Layout>
   
   
</div> 

 

 );
}

export default App;

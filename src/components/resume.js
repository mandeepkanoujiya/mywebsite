import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-responsive">
        <Grid className = "resume-img">
          <Cell col={4}>
            <div  style={{textAlign: 'center'}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                alt="avatar"
                style={{height: '200px'}}
                
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mandeep Kanoujiya</h2>
            <h4 style={{color: 'grey'}}>Front End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>My name is Mandeep Kanoujiya.I'm passionate Front End developer from Mumbai.I did my graduation from K J Somaiya College of Science and Commerce in a field of BSc(I.T) in the year 2018.Now I'm currently pursuing MSc(I.T) from the same college.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Dombivli ,thane 421202</p>
            <h5>Phone</h5>
            <p>(+91) 9594362167</p>
            <h5>Email</h5>
            <p>mandeepdk123@gmail.com</p>
           <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

             <Education
              startYear={2015}
              endYear={2018}
              schoolName="Bsc (I.T)"
              schoolDescription="K J Somaiya College of Science And Commerce is an Autonomous College affilated to Mumbai University."
               />

               <Education
                 startYear={2018}
                 endYear={2020}
                 schoolName="Msc (I.T)"
                 schoolDescription="K J Somaiya College of Science And Commerce is an Autonomous College affiliated to Mumbai University"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
                
              <h2>Skills</h2>
                 <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill= "javascript"
                    progress={60}
                    />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
             </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;


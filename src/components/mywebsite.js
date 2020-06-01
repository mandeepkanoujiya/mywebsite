
import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'



class MyWebsite extends Component {
    render() {
        return (
                
            <div className="header" style={{width: '100%', height: '100%',margin: 'auto'}}>
                <Grid className="main">
                    <Cell col={12}>
                        <img
                        src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                       /* src={mandy} */
                        alt="avatar"
                         className="avatar-img"
                        
                         />
                         
                         <div className="banner-text">
                             <h5>Front End Developer</h5>
                         </div>
                         
                         <p className="para-text">HTML/CSS | Bootstrap | Javascript | React | NodeJS</p>
                         <div className="social-links">

                        {/* LinkedIn */}
                         <a href="https://www.linkedin.com/in/mandeep-kanoujiya-854241118" rel="noopener noreferrer" target="_blank">
                         <i className="fa fa-linkedin-square" aria-hidden="true" />
                         </a>

                     {/* Github */}
                         <a href="https://github.com/mandeepkanoujiya" rel="noopener noreferrer" target="_blank">
                         <i className="fa fa-github-square" aria-hidden="true" />
                         </a>

                    {/* Freecodecamp */}
                      
                       <i className="fa fa-free-code-camp" aria-hidden="true" />
                        
                </div>
     </Cell>
    </Grid>
</div>

        ) 
    }
}

export default MyWebsite;
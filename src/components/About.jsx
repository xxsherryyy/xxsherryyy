// import React from 'react';
// import './About.scss';
import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';


class About extends Component {
    render() {
      return(
        <div id = "about" className = "section" >
             <Typography component="h2" variant="h6" gutterBottom>
<h1 className = "section-title">About Me</h1>
        </Typography>
            
            <br/>
            <div className = "image-container">
                <img src='./images/profile.jpeg' alt="Sherry Yang" class="bio-image"/> 
            </div>
            <div class="about-info">
            {/* <h3 class="text-secondary"><b>BIO</b></h3> */}
            <p>
            Experienced in Full-Stack web development with Javascript based language.
            </p>
        
        <p>I'm a web developer, UX/UI engineer and photographer. I hold a Full-Stack Developer Certificate from Southern Methodist University where I developed my skill set in MERN stack. Freelancing in the digital space allows me to utilize my academic background in molecular biology and biomedical engineering research, and industry experience in startup environments to merge my passion in science, technology, business and creativity to express those ideas and share that with the world. As a professional, my interests and openness to learning has allowed me to connect with people from diverse backgrounds and facilitate the conceptualization process to visualize their goals. No matter what industries you work in or what projects you have in mind, I enjoy collaborating to help translate visions into digital works. </p>
        <br /><br />
            </div>
        </div>


    );
};
}
export default About;
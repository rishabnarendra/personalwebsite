import React, { Component } from 'react'; 
import Me from './Me.jpg';
import { SocialIcon } from 'react-social-icons';
import { Helmet } from 'react-helmet';

class About extends Component{

    openLinkedIn(){
        window.open("https://www.linkedin.com/in/rishab-narendra/");
      }
    
      openGitHub(){
        window.open("https://github.com/rishabnarendra");
      }
    
      openInstagram(){
        window.open("https://www.instagram.com/rishabnarendra/?hl=en");
      }
    
      openFacebook(){
        window.open("https://www.facebook.com/rishab.narendra.7");
      }

    render(){
        return(
            <div class="AboutSummary">
                <div class="ImageAndIcons">
                    <img class="MyImage" src={Me} alt={"My Image"}></img>
                    <br></br>
                    <div class="SocialIcons">
                        <h2>Rishab Narendra</h2>
                        <h2>Software Engineer</h2>
                        <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} bgColor="#6b92ff"/>
                        <SocialIcon network="github" onClick={() => this.openGitHub()} bgColor="#171515"/>
                        <SocialIcon network="instagram" onClick={() => this.openInstagram()} bgColor="#b9309d"/>
                        <SocialIcon network="facebook" onClick={() => this.openFacebook()} bgColor="#3d5a9c"/>
                    </div>
                </div>
                <div class="Biography">
                    <h2>Biography</h2>
                    <p class="MyDescription">
                        My name is Rishab Narendra. Currently I am a Software Development Engineer Intern at Farm Bureau Financial 
                        Services. I am a junior studying Computer Science at Iowa State University and have a deep passion for machine 
                        learning and algorithms along with web development and design. These can be illustrated through my projects 
                        and work experience which required me to learn multiple concepts outside of class. 
                        <br></br>
                        I am an engaged, creative student seeking to leverage exemplary leadership skills, analytical
                        skills, and coding skills through a full-time job starting in December 2019. 
                    </p>
                    <br></br>

                    <i class="fas fa-graduation-cap">  Education</i>
                    <p>BS in Computer Science, Fall 2019</p>
                    <p>Iowa State University</p>
                </div>
            </div>  
        );
    }
}

export default About; 
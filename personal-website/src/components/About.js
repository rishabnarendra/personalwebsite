import React, { Component } from 'react'; 
import Me from './Me.jpg';
import { SocialIcon } from 'react-social-icons';
import MyResume from './Rishab_Narendra.Resume.pdf';

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

      openResume(){
        window.open(MyResume);
    }

    render(){
        return(
            <div class="AboutSummary">
                <div class="ImageAndIcons">
                    <img class="MyImage" src={Me} alt={"My Image"}></img>
                    <br />
                    <div class="SocialIcons">
                        <h2>Rishab Narendra</h2>
                        <h2>Software Engineer</h2>

                        <p class="MyDescription">
                        My name is Rishab Narendra. Currently I am a Software Development Engineer Intern at Farm Bureau Financial 
                        Services. I am a junior studying Computer Science at Iowa State University and have a deep passion for machine 
                        learning and algorithms along with web development and design. These can be illustrated through my projects 
                        and work experience which required me to learn multiple concepts outside of class. 
                        <br></br>
                        I am an engaged, creative student seeking to leverage exemplary leadership skills, analytical
                        skills, and coding skills through a full-time job starting in December 2019. 
                    </p>
                        <div class="wrap">
                            <a class="button" onClick={() => this.openResume()}>View Full Resume</a>
                        </div>
                        <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} style={{ height: 75, width: 75 }} bgColor="#6b92ff"/>
                        <SocialIcon network="github" onClick={() => this.openGitHub()} style={{ height: 75, width: 75 }} bgColor="#171515"/>
                        <SocialIcon network="instagram" onClick={() => this.openInstagram()} style={{ height: 75, width: 75 }} bgColor="#b9309d"/>
                        <SocialIcon network="facebook" onClick={() => this.openFacebook()} style={{ height: 75, width: 75 }} bgColor="#3d5a9c"/>
                    </div>
                </div>
                <br /><br />
            </div>  
        );
    }
}

export default About; 
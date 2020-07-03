import React, { Component } from 'react'; 
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
                <span class="letter1" data-letter="Hi! I'm Rishab Narendra.">Hi! I'm Rishab Narendra.</span><br />
                <span class="letter2" data-letter="Software Engineer">Software Engineer</span>
                <div class="wrap">
                    <a class="button" onClick={() => this.openResume()}>View Full Resume</a>
                </div>
                <img src="./profile.jpeg" style={{width: '18em'}} /><br /><br />
                <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} style={{ cursor: 'pointer', height: 45, width: 45, paddingRight: '10px'}} bgColor="#ffffff"/>
                <SocialIcon network="github" onClick={() => this.openGitHub()} style={{ cursor: 'pointer', height: 45, width: 45, paddingRight: '10px'}} bgColor="#ffffff"/>
                <SocialIcon network="instagram" onClick={() => this.openInstagram()} style={{ cursor: 'pointer', height: 45, width: 45, paddingRight: '10px'}} bgColor="#ffffff"/>
                <SocialIcon network="facebook" onClick={() => this.openFacebook()} style={{ cursor: 'pointer', height: 45, width: 45, paddingRight: '10px'}} bgColor="#ffffff"/>
                <br /><br />
            </div>  
        );
    }
}

export default About; 
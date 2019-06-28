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
                <div class="foo">
                    <span class="letter1" data-letter="Hi! I'm Rishab Narendra.">Hi! I'm Rishab Narendra.</span>
                </div>
                <div class="foo2">
                    <span class="letter2" data-letter="Software Developer.">Software Developer.</span>
                </div>
                <div class="wrap">
                    <a class="button" onClick={() => this.openResume()}>View Full Resume</a>
                </div>

                <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} style={{ height: 45, width: 45 }} bgColor="#ffffff"/>
                <SocialIcon network="github" onClick={() => this.openGitHub()} style={{ height: 45, width: 45 }} bgColor="rgb(5, 5, 5)"/>
                <SocialIcon network="instagram" onClick={() => this.openInstagram()} style={{ height: 45, width: 45 }} bgColor="#ffffff"/>
                <SocialIcon network="facebook" onClick={() => this.openFacebook()} style={{ height: 45, width: 45 }} bgColor="rgb(5, 5, 5)"/>
                <br /><br />
            </div>  
        );
    }
}

export default About; 
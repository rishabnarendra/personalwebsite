import React, { Component } from 'react'; 
import Me from './Me.jpg';
import { SocialIcon } from 'react-social-icons';

class about extends Component{

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
            <div class="Summary">
                <figure>
                    <img class="MyImage" src={Me} alt={"My Image"}></img>
                    <br></br><br></br>
                    <figcaption class="Name">Rishab Narendra</figcaption>
                    <figcaption class="Title">Software Engineer</figcaption>
                    <br></br>
                    <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} bgColor="#6b92ff"/>
                    <SocialIcon network="github" onClick={() => this.openGitHub()} bgColor="#171515"/>
                    <SocialIcon network="instagram" onClick={() => this.openInstagram()} bgColor="#b9309d"/>
                    <SocialIcon network="facebook" onClick={() => this.openFacebook()} bgColor="#3d5a9c"/>
                </figure>
            </div>
        );
    }
}

export default about; 
import React, { Component } from 'react'; 
import { Helmet } from 'react-helmet';

class Experience extends Component{

    openFarmBureau(){
        window.open("https://www.fbfs.com/");
    }

    openCSAFE(){
        window.open("https://forensicstats.org/");
    }

    openISU(){
        window.open("https://www.iastate.edu/");
    }

    render(){
        return(
            <div class="ExperienceSummary">
                <h2 class="Header">Experience</h2>
                <div class="ExperienceCard">
                    <h3 class="ExperiencePosition">Software Development Engineer Intern</h3>
                    <p class="ExperiencePlace" onClick={() => this.openFarmBureau()}>Farm Bureau Financial Services</p>
                    <p class="ExperienceDate">May 2019 - August 2019  *  Des Moines, IA</p>
                </div>
                <br></br><br></br>

                <div class="ExperienceCard">
                    <h3 class="ExperiencePosition">Software Development Engineer Intern</h3>
                    <p class="ExperiencePlace" onClick={() => this.openCSAFE()}>Center for Statistics and Applications in Forensic Evidence</p>
                    <p class="ExperienceDate">September 2018 - December 2018  *  Ames, IA</p>
                </div>
                <br></br><br></br>

                <div class="ExperienceCard">
                    <h3 class="ExperiencePosition">Software Development Engineer Intern</h3>
                    <p class="ExperiencePlace" onClick={() => this.openFarmBureau()}>Farm Bureau Financial Services</p>
                    <p class="ExperienceDate">May 2019 - August 2019  *  Des Moines, IA</p>
                </div>
                <br></br><br></br>

                <div class="ExperienceCard">
                    <h3 class="ExperiencePosition">Teaching Instructor</h3>
                    <p class="ExperiencePlace" onClick={() => this.openISU()}>Iowa State University</p>
                    <p class="ExperienceDate">January 2018 - May 2018  *  Ames, IA</p>
                </div>
            </div>
        );
    }
}

export default Experience; 
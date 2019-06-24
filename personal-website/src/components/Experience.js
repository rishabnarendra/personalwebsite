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
            <div class="Experience">
                <Helmet>
                    <style>{'body { background-color: #f7f7f7 !important; }'}</style>
                </Helmet>
                <h2 class="ExperienceHeader">Experience</h2>
                <div class="Card">
                    <h3 class="Position">Software Development Engineer Intern</h3>
                    <p class="Place" onClick={() => this.openFarmBureau()}>Farm Bureau Financial Services</p>
                    <p class="Date">May 2019 - August 2019  *  Des Moines, IA</p>
                </div>
                <br></br><br></br>

                <div class="Card">
                    <h3 class="Position">Software Development Engineer Intern</h3>
                    <p class="Place" onClick={() => this.openCSAFE()}>Center for Statistics and Applications in Forensic Evidence</p>
                    <p class="Date">September 2018 - December 2018  *  Ames, IA</p>
                </div>
                <br></br><br></br>

                <div class="Card">
                    <h3 class="Position">Software Development Engineer Intern</h3>
                    <p class="Place" onClick={() => this.openFarmBureau()}>Farm Bureau Financial Services</p>
                    <p class="Date">May 2019 - August 2019  *  Des Moines, IA</p>
                </div>
                <br></br><br></br>

                <div class="Card">
                    <h3 class="Position">Teaching Instructor</h3>
                    <p class="Place" onClick={() => this.openISU()}>Iowa State University</p>
                    <p class="Date">January 2018 - May 2018  *  Ames, IA</p>
                </div>
            </div>
        );
    }
}

export default Experience; 
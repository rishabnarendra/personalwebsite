import React, { Component } from 'react'; 
import { Helmet } from 'react-helmet';

class Experience extends Component{

    render(){
        return(
            <div class="ExperienceSummary">
                <div class="foo">
                    <span class="letter" data-letter="Experience">Experience</span>
                </div>
                <div class="FlipCard">
                    <div class="ExperienceCard">
                        <div class="ExperienceCardFront">
                            <h3 class="ExperiencePosition">Software Development Intern</h3>
                            <p><a class="ExperiencePlace">Farm Bureau Financial Services</a></p>
                            <p class="ExperienceDate">May 2019 - August 2019  *  Des Moines, IA</p>
                        </div>
                        <div class="ExperienceCardBack">
                            <p>
                                ● Architected and built a self-service tool for Claims teams using Robotic Process Automation (RPA) to automate payments and receipts
                                <br />
                                ● Replaced manual, repetitive processes; reduced business costs for the company
                                <br />
                                ● Used C#, SQL, HTML/CSS, JavaScript, AA Enterprise Client, and Jenkins
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div class="FlipCard">
                    <div class="ExperienceCard">
                        <div class="ExperienceCardFront">
                            <h3 class="ExperiencePosition">Software Development Intern</h3>
                            <p><a class="ExperiencePlace">Center for Statistics and Applications in Forensic Evidence</a></p>
                            <p class="ExperienceDate">September 2018 - December 2018  *  Ames, IA</p>
                        </div>
                        <div class="ExperienceCardBack">
                            <p>
                                ● Designed a web application to interact with X3P (XML 3D Surface Profiles) files
                                <br />
                                ● Created an HTTP REST API for abstracting interactions 
                                <br />
                                ● Used Java, C#, SQL, HTML/CSS, JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div class="FlipCard">
                    <div class="ExperienceCard">
                        <div class="ExperienceCardFront">
                            <h3 class="ExperiencePosition">Software Development Intern</h3>
                            <p><a class="ExperiencePlace">Farm Bureau Financial Services</a></p>
                            <p class="ExperienceDate">May 2018 - August 2018  *  Des Moines, IA</p>
                        </div>
                        <div class="ExperienceCardBack">
                            <p>
                                ● Designed and built a mobile application (iOS & Android) that saves the business 200,000 annually 
                                <br />
                                ● Application won Novarica Research Council Impact Award 
                                <br />
                                ● Provides easy access for insurance customers information and quick payments
                                <br />
                                ● Application published on Google Play and App Store
                                <br />
                                ● Used C#, SQL, HTML/CSS, TypeScript, Ionic, and Jenkins 
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div class="FlipCard">
                    <div class="ExperienceCard">
                        <div class="ExperienceCardFront">
                            <h3 class="ExperiencePosition">Teaching Instructor</h3>
                            <p><a class="ExperiencePlace">Iowa State University</a></p>
                            <p class="ExperienceDate">January 2018 - May 2018  *  Ames, IA</p>
                        </div>
                        <div class="ExperienceCardBack">
                            <p>
                                ● Teaching Instructor for Introduction to Web Programming
                                <br />
                                ● Responsibilities include teaching fundamental web design concepts in HTML/CSS and JavaScript, managing
                                course infrastructure, and mentoring course students through semester projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience; 
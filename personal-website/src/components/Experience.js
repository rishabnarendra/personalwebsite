import React, { Component } from 'react'; 
import Grid from '@material-ui/core/Grid';

class Experience extends Component{

    render(){
        return(
            <div>
                <div class="Heading"> 
                    <span class="letter" data-letter="Experience">Experience</span>
                </div>
                <div class="ExperienceSummary">
                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                            <span><h3 class="ExperiencePosition">Software Engineer</h3><p class="ExperienceDate">May 2020 - Present, Bangalore, KA</p></span>
                            <p><a class="ExperiencePlace">Aptean</a></p>
                            <p class="ExperienceCardBack">
                                ● Migrating an existing desktop ERP application to the web using C#, VB, .NET, Sencha.js
                                <br /><br />
                            </p>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <i class="fas fa-arrow-circle-up"></i>

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <span><h3 class="ExperiencePosition">Software Engineer Intern</h3><p class="ExperienceDate">May 2019 - Aug 2019, Des Moines, IA</p></span>
                                <p><a class="ExperiencePlace">Farm Bureau Financial Services</a></p>
                                <p class="ExperienceCardBack">
                                    ● Reduced 1-month manual payments/receipts process to 2 hours using Robotic Process Automation
                                    <br /><br />
                                    ● Automation has error rate {'<'} 1% for 1000 plus payments reducing business costs by 1000’s 
                                    <br /><br />
                                    ● Involved in the complete software life cycle from coding to testing to deployment
                                    <br /><br />
                                    ● C#, SQL, HTML/CSS, JavaScript, AA Enterprise Client, and Jenkins
                                </p>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <i class="fas fa-arrow-circle-up"></i>

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <span><h3 class="ExperiencePosition">Software Engineer Intern</h3><p class="ExperienceDate">Sep 2018 - Dec 2018, Ames, IA</p></span>
                                <p><a class="ExperiencePlace">Iowa State University (CSAFE)</a></p>
                            </div>
                            <div class="ExperienceCardBack">
                                <p>
                                    ● Designed CSAFE’s first web application to interact with X3P files
                                    <br /><br />
                                    ● Structured entire backend along with SQL tables to interact with web app 
                                    <br /><br />
                                    ● Java, C#, Docker, SQL, HTML/CSS, and JavaScript
                                </p>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <i class="fas fa-arrow-circle-up"></i>

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <span><h3 class="ExperiencePosition">Software Engineer Intern</h3><p class="ExperienceDate">May 2018 - Aug 2018, Des Moines, IA</p></span>
                                <p><a class="ExperiencePlace">Farm Bureau Financial Services</a></p>
                            </div>
                            <div class="ExperienceCardBack">
                                <p>
                                    ● Designed and built an insurance mobile application that saves FBFS $200,000 annually 
                                    <br /><br />
                                    ● Involved in the complete software life cycle from coding to testing to deployment
                                    <br /><br />
                                    ● Application won 2019 Novarica Research Council Impact Award USA 
                                    <br /><br />
                                    ● C#, SQL, HTML/CSS, TypeScript, Ionic, and Jenkins
                                </p>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <i class="fas fa-arrow-circle-up"></i>

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <span><h3 class="ExperiencePosition">Teaching Instructor</h3><p class="ExperienceDate">Jan 2018 - May 2018, Ames, IA</p></span>
                                <p><a class="ExperiencePlace">Iowa State University</a></p>
                            </div>
                            <div class="ExperienceCardBack">
                                <p>
                                    ● Teaching Instructor for Introduction to Web Programming in JavaScript
                                    <br /><br />
                                    ● Managed course infrastructure and mentored students through semester long projects 
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default Experience; 
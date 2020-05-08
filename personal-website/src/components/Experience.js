import React, { Component } from 'react'; 

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
                                <h3 class="ExperiencePosition">Software Development Intern</h3>
                                <p><a class="ExperiencePlace">Farm Bureau Financial Services</a></p>
                                <p class="ExperienceDate">May 2019 - August 2019</p>
                                <p class="ExperienceLocation">Des Moines, IA</p>
                                <p class="ExperienceCardBack">
                                    ● Reduced 1-month manual payments/receipts process to 2 hours using Robotic Process Automation
                                    <br /><br />
                                    ● Automation has error rate {'<'} 1% for 1000 plus payments reducing business costs by 1000’s 
                                    <br /><br />
                                    ● Used C#, SQL, HTML/CSS, JavaScript, AA Enterprise Client, Jenkins
                                </p>
                            </div>
                        </div>
                    </div>
                    <br /><br /><hr />

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <h3 class="ExperiencePosition">Software Development Intern</h3>
                                <p><a class="ExperiencePlace">Center for Statistics and Applications in Forensic Evidence</a></p>
                                <p class="ExperienceDate">September 2018 - December 2018, Ames, IA</p>
                            </div>
                            <div class="ExperienceCardBack">
                                <p>
                                    ● Designed CSAFE’s first web application to interact with X3P files
                                    <br /><br />
                                    ● Structured entire backend along with SQL tables to interact with web app 
                                    <br /><br />
                                    ● Used Java, C#, SQL, HTML/CSS, JavaScript 
                                </p>
                            </div>
                        </div>
                    </div>
                    <br /><br /><hr />

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <h3 class="ExperiencePosition">Software Development Intern</h3>
                                <p><a class="ExperiencePlace">Farm Bureau Financial Services</a></p>
                                <p class="ExperienceDate">May 2018 - August 2018, Des Moines, IA</p>
                            </div>
                            <div class="ExperienceCardBack">
                                <p>
                                    ● Designed and built an insurance mobile application that saves FBFS $200,000 annually 
                                    <br /><br />
                                    ● Application won 2019 Novarica Research Council Impact Award USA 
                                    <br /><br />
                                    ● Used C#, SQL, HTML/CSS, TypeScript, Ionic, Jenkins 
                                </p>
                            </div>
                        </div>
                    </div>
                    <br /><br /><hr />

                    <div class="FlipCard">
                        <div class="ExperienceCard">
                            <div class="ExperienceCardFront">
                                <h3 class="ExperiencePosition">Teaching Instructor</h3>
                                <p><a class="ExperiencePlace">Iowa State University</a></p>
                                <p class="ExperienceDate">January 2018 - May 2018, Ames, IA</p>
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
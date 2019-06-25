import React, { Component } from 'react'; 

class Projects extends Component{
    render(){
        return(
            <div class="ProjectSummary">
                <h2 class="ProjectHeader">Projects</h2> 
                <div class="ProjectCard">
                    <h3 class="ProjectPosition">Next Gen 911</h3>
                    <p class="ProjectDate">
                        An Android app that uses publicly available emergency services in close proximity to a caller’s location to 
                        allow faster response time during 911 emergencies. Desktop operator receives caller’s health details for 
                        faster aid.
                    </p>
                </div>
                <br></br><br></br>

                <div class="ProjectCard">
                    <h3 class="ProjectPosition">Salt Analysis Simulator</h3>
                    <p class="ProjectDate">
                        An algorithmic C++ program that simulates the lab salt analysis process by performing preliminary, dilute acid, 
                        concentrated acid, and reagent tests.
                    </p>
                </div>
            </div>
        );
    }
}

export default Projects; 
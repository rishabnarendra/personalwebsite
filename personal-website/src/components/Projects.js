import React, { Component } from 'react'; 

class Projects extends Component{
    render(){
        return(
            <div class="Summary">
                <h2 class="ExperienceHeader">Projects</h2> 
                <div class="Card">
                    <h3 class="Position">Next Gen 911</h3>
                    <p class="Date">An Android app that uses publicly available emergency services in close proximity to a caller’s location to 
                    allow faster response time during 911 emergencies. Desktop operator receives caller’s health details for 
                    faster aid.
                    </p>
                </div>
                <br></br><br></br>

                <div class="Card">
                    <h3 class="Position">Salt Analysis Simulator</h3>
                    <p class="Date">An algorithmic C++ program that simulates the lab salt analysis process by performing preliminary, dilute acid, 
                    concentrated acid, and reagent tests.
                    </p>
                </div>
            </div>
        );
    }
}

export default Projects; 
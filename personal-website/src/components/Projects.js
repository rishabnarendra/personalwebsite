import React, { Component } from 'react'; 

class Projects extends Component{

    openProject(name){
        if(name === 'Sorting'){
            window.open("https://rishabnarendra.github.io/SortingVisualization");
        }
        else if(name === 'Covid'){
            window.open("https://rishabnarendra.github.io/Covid-19Tracker");
        }
    }

    render(){
        return(
            <div class="ProjectSummary">
                <div class="foo">
                    <span class="letter" data-letter="Projects">Projects</span>
                </div>
                <div class="ProjectCard">
                    <h3 class="ProjectPosition">Sorting Visualizer</h3>
                    <p class="ProjectDate">
                        A JavaScript app that animates the sorting process for many famous algorithms. 
                    </p>
                    <div class="wrap">
                        <a class="button" onClick={() => this.openProject('Sorting')}>Live Demo</a>
                    </div>
                </div>
                <br></br><br></br>

                <div class="ProjectCard">
                    <h3 class="ProjectPosition">Covid-19 Tracker</h3>
                    <p class="ProjectDate">
                    A JavaScript app that uses APIs to view live statistics of coronavirus infections around the world.
                    </p>
                    <div class="wrap">
                        <a class="button" onClick={() => this.openProject('Covid')}>Live Demo</a>
                    </div>
                </div>
                <br></br><br></br>

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
                    <h3 class="ProjectPosition">Ninja-Game</h3>
                    <p class="ProjectDate">
                        An Swift game comparable to Mario.
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
                <br></br><br></br>
            </div>
        );
    }
}

export default Projects; 
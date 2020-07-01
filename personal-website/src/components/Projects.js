import React, { Component } from 'react'; 
import Grid from '@material-ui/core/Grid';

class Projects extends Component{

    openProject(name){
        if(name === 'Pong'){
            window.open("https://github.com/rishabnarendra/PongGame");
        }
        else if(name === 'Snake'){
            window.open("https://github.com/rishabnarendra/SnakeGame");
        }
        else if(name === 'NBA'){
            window.open("https://rishabnarendra.github.io/LatestNBA");
        }
        else if(name === 'Sorting'){
            window.open("https://rishabnarendra.github.io/SortingVisualization");
        }
        else if(name === 'Covid'){
            window.open("https://rishabnarendra.github.io/Covid-19Tracker");
        }
        else if(name === 'Ninja'){
            window.open("https://github.com/rishabnarendra/Ninja-Game");
        }
        else if(name === 'Salt'){
            window.open("https://github.com/rishabnarendra/Salt-Analysis");
        }
    }

    render(){
        return(
            <div class="ProjectSummary">
                <span class="letter" data-letter="Projects">Projects</span>
                <Grid container spacing={4}>
                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Quick Draw</h3>
                            <p class="ProjectDescription">
                                A CNN that identifies user drawn doodles at an accuracy of 95%. Uses Google's Quick
                                Draw dataset along with Python and Tensorflow. 
                            </p>
                            <div class="wrap">
                                <a class="button">Private Repository</a>
                            </div>
                        </div>
                        <br></br><br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Sorting Visualizer</h3>
                            <p class="ProjectDescription">
                                A JavaScript app that animates the sorting process for many famous algorithms. 
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('Sorting')}>Live Demo</a>
                            </div>
                        </div>
                        <br></br><br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Covid-19 Tracker</h3>
                            <p class="ProjectDescription">
                                A JavaScript app that uses APIs to view live statistics of coronavirus infections around the world.
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('Covid')}>Live Demo</a>
                            </div>
                        </div>
                        <br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Next Gen 911</h3>
                            <p class="ProjectDescription">
                                An Android app that uses publicly available emergency service APIs near a caller’s location to allow faster
                                response time during 911 emergencies.
                            </p>
                            <div class="wrap">
                                <a class="button">Private Repository</a>
                            </div>
                        </div>
                        <br></br><br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Latest NBA</h3>
                            <p class="ProjectDescription">
                                I'm a big NBA fan. This application provides me with the latest game data and NBA standings by conference.  
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('NBA')}>Live Demo</a>
                            </div>
                        </div>
                        <br></br><br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Pong Game</h3>
                            <p class="ProjectDescription">
                                A Java implementation of the classic pong game. However, instead of a score system, the person who loses a point
                                also loses a portion of their paddle. The game is over when the paddle has been sliced completely.  
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('Pong')}>View Code</a>
                            </div>
                        </div>
                        <br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Snake Game</h3>
                            <p class="ProjectDescription">
                                A Python implementation of the classic snake game using the Pygame module. 
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('Snake')}>View Code</a>
                            </div>
                        </div>
                        <br></br><br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Ninja-Game</h3>
                            <p class="ProjectDescription">
                                A Swift game comparable to Mario.
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('Ninja')}>View Code</a>
                            </div>
                        </div>
                        <br></br><br></br>
                    </Grid>

                    <Grid item md={4}>
                        <div class="ProjectCard">
                            <h3 class="ProjectName">Salt Simulator</h3>
                            <p class="ProjectDescription">
                                A C++ program that simulates the lab salt analysis process by performing preliminary, dilute, and concentrated acid tests.
                            </p>
                            <div class="wrap">
                                <a class="button" onClick={() => this.openProject('Salt')}>View Code</a>
                            </div>
                        </div>
                        <br />
                    </Grid>
                </Grid>
                <br /><br />
            </div>
        );
    }
}

export default Projects; 
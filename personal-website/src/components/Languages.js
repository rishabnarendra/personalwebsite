import React, { Component } from 'react'; 

class Languages extends Component{

    openReact(){
        window.open("https://reactjs.org/");
      }

    render(){
        return(
            <div class="LanguageSummary">
                <h1 class="ExperienceHeader">Languages</h1> 
                <div class="ProgressBars">
                    <div class="Column">
                        <h4>HTML</h4>
                        <div class="ProgressCircle p95">
                            <span>95%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>

                        <h4>CSS</h4>
                        <div class="ProgressCircle p95">
                            <span>95%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>

                        <h4>JavaScript</h4>
                        <div class="ProgressCircle p95">
                            <span>95%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>
                    </div>

                    <div class="Column">
                        <h4>Java</h4>
                        <div class="ProgressCircle p90">
                            <span>90%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>

                        <h4>C/C++</h4>
                        <div class="ProgressCircle p90">
                            <span>90%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>

                        <h4>C#</h4>
                        <div class="ProgressCircle p90">
                            <span>90%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>
                    </div>

                    <div class="Column">
                        <h4>Python</h4>
                        <div class="ProgressCircle p85">
                            <span>85%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>

                        <h4>SQL</h4>
                        <div class="ProgressCircle p85">
                            <span>85%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>

                        <h4>GIT</h4>
                        <div class="ProgressCircle p85">
                            <span>85%</span>
                            <div class="Left-Half">
                                <div class="FirstHalf"></div>
                                <div class="ValueBar"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <br></br>
                    {'\u00A9'} 2019 by Rishab Narendra. Proudly created with <a class="ReactLink" onClick={() => this.openReact()}>React</a>.  
                    <br></br><br></br>
                </footer>
            </div>
        );
    }
}

export default Languages; 
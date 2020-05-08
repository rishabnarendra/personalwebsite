import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Languages';
import './App.css';

function App() {

  return (  
    <div class = "background">
      <main class="Main">
        <input id="tab1" type="radio" name="tabs" onClick={() => document.getElementById('About').scrollIntoView()}/>
        <label for="tab1">About</label>

        <input id="tab2" type="radio" name="tabs" onClick={() => document.getElementById('Experience').scrollIntoView()}/>
        <label for="tab2">Experience</label>

        <input id="tab3" type="radio" name="tabs" onClick={() => document.getElementById('Projects').scrollIntoView()}/>
        <label for="tab3">Projects</label>

        <input id="tab4" type="radio" name="tabs" onClick={() => document.getElementById('Languages').scrollIntoView()}/>
        <label for="tab4">Languages</label>
        <hr />
      </main>
      <div id="About">
        <About />
      </div>
      <p style={{whiteSpace: 'nowrap', overflow: 'hidden', color:'white'}}>///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</p>
      <div id="Experience"> 
        <Experience />
      </div>
      <p style={{whiteSpace: 'nowrap', overflow: 'hidden', color:'white'}}>///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</p>
      <div id="Projects">
        <Projects />
      </div>
      <p style={{whiteSpace: 'nowrap', overflow: 'hidden', color:'white'}}>///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</p>
      <div id="Languages">
        <Languages />
      </div>
    </div>
  );
}

export default App;

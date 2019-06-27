import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Languages';
import './App.css';

function App() {

  return (  
    <div>
      <main class="Main">
        <input id="tab1" type="radio" name="tabs" />
        <label for="tab1"><a class="Tabs" href="#About">About</a></label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2"><a class="Tabs" href="#Experience">Experience</a></label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3"><a class="Tabs" href="#Projects">Projects</a></label>

        <input id="tab4" type="radio" name="tabs" />
        <label for="tab4"><a class="Tabs" href="#Languages">Languages</a></label>
        <hr />
      </main>
      <div id="About">
        {/* <About /> */}
      </div>
      <div id="Experience"> 
        <Experience />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Languages">
        <Languages />
      </div>
    </div>
  );
}

export default App;

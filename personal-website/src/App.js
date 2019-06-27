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
        <label for="tab1">About</label>

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2">Experience</label>

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3">Projects</label>

        <input id="tab4" type="radio" name="tabs" />
        <label for="tab4">Languages</label>
        <hr />
      </main>
      {/* <About /> */}
      <Experience />
      <Projects />
      <Languages />
    </div>
  );
}

export default App;

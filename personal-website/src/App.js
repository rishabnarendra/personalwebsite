import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Languages';
import './App.css';

function App() {
  return (  
      <ul class="Tabs">
        <li class="MyName">Rishab Narendra</li>
        <li class="TabLinks">About</li>
        <li class="TabLinks">Work</li>
        <li class="TabLinks">Projects</li>
        <li class="TabLinks">Languages</li>
        <hr class="Line"></hr>
        <About />
        <Experience />
        <Projects />
        <Languages />
        <footer>
          {'\u00A9'} 2019 by Rishab Narendra. Proudly created with React.  
          <br></br><br></br>
        </footer>
      </ul>
  );
}

export default App;

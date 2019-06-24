import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
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
      </ul>
  );
}

export default App;

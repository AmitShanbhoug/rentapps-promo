import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;

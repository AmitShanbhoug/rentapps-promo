import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Features from './Features';
import Beta from './Beta';
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Features/>
        <Beta/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Features from './Features';
import Beta from './Beta';
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "RentApps"
  }, []);
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

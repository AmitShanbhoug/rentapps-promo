import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Features from './Features';
import Beta from './Beta';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Features} />
        <Route path="/beta" component={Beta} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 
'react-router-dom'; // App
// App.js

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Parking from './components/Parking';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/categories/parking' element={<Parking />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
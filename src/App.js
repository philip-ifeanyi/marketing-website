import React, { Component } from "react";
import Navbar from "./components/nav-component/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/home-component/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route 
              exact path="/" 
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;

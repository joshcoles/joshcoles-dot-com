import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Home from './components/Home';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
        <div className="App">
          <div>
            <Header />
            <IntroSection />
          </div>
        </div>
    );
  }
}

export default App;




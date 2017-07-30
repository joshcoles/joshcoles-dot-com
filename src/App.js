import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';
import ProfileSection from './components/ProfileSection';
import IntroSection from './components/IntroSection';
import Resume from './components/Resume';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileSection />
        <IntroSection />
      </div>
    );
  }
}

export default App;




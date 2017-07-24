import React, { Component } from 'react';

import './App.css';
import ProfileSection from './components/ProfileSection';
import IntroSection from './components/IntroSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-header">
          <ProfileSection />
        </div>
        <IntroSection />
      </div>
    );
  }
}

export default App;




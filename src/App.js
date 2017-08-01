import React from 'react';

import './App.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';




class App extends React.Component {
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




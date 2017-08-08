import React from 'react';
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Main from './components/Main';

class App extends React.Component {
  render() {

    return (
      <div className="App">
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;




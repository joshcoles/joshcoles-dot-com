import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import SinglePage from './components/home/SinglePage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={SinglePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;




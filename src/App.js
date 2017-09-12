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
                <nav className="main-menu col-sm-12">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                  </ul>
                </nav>
                <Header />
                  <Route path="/projects" component={Projects}/>
                  <Route exact path="/" component={Main}/>
                  <Route path="/SinglePage" component={SinglePage}/>
                <Footer />
              </div>
            </Router>
        </div>

    );
  }
}

export default App;




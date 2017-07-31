import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import App from '../App';

const Nav = () => (
  <Router>
    <div className="main-menu">
      <ul>
        <li><Link to="/"></Link></li>
      </ul>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
)

export default Nav;





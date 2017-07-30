import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ProfileSection from './ProfileSection';
import Resume from './Resume';
import Home from './Home';


const Nav = () => (
  <Router>
    <div className="main-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
    </div>
  </Router>
)

export default Nav;





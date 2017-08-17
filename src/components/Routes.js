import React from 'react';
import Projects from './Projects';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Routes extends React.Component {
render() {
    return (
        <div className='routes'>
           <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
              <Route path="/projects" component={Projects}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default Routes;



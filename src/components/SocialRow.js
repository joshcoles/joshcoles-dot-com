import React, { Component } from 'react';

class SocialRow extends React.Component {
  render() {
    return (
        <div className="social-media-row">
            <ul>
              <li className="twitter"><a rel="noopener noreferrer" target="_blank" href="http://twitter.com/joshcoles"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li className="facebook"><a rel="noopener noreferrer" target="_blank" href="http://facebook.com/joshcoles"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li className="instagram"><a rel="noopener noreferrer" target="_blank" href="http://instagram.com/joshkcoles"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li className="linkedin"><a rel="noopener noreferrer" target="_blank" href="http://linkedin.com/in/joshcoles"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li className="github"><a rel="noopener noreferrer" target="_blank" href="http://github.com/joshcoles"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            </ul>
          </div>
    );
  }
}


export default SocialRow;
import React from 'react';

class SocialRow extends React.Component {

  render() {
    return (
        <div className="social-media-row">
            <ul>
              <li className="twitter"><a rel="noopener noreferrer" target="_blank" href={this.props.urls.twitter}><i className="fa fa-twitter" aria-hidden="true" title="Josh Coles on Twitter."></i></a></li>
              <li className="facebook"><a rel="noopener noreferrer" target="_blank" href={this.props.urls.facebook}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li className="instagram"><a rel="noopener noreferrer" target="_blank" href={this.props.urls.instagram}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li className="linkedin"><a rel="noopener noreferrer" target="_blank" href={this.props.urls.linkedin}><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li className="github"><a rel="noopener noreferrer" target="_blank" href={this.props.urls.github}><i className="fa fa-github" aria-hidden="true"></i></a></li>
            </ul>
          </div>
    );
  }
}


export default SocialRow;
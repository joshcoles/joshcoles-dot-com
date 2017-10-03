import React from 'react';

class Contact extends React.Component {

  render() {
    return (
        <div className="contact container-fluid">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <h2>Hit me on my mobile.</h2>
              <p>I'm currently working full-time as a web developer, but I'm always happy to talk about contract work.</p>
              <a className="button primary-button">Email me</a>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;

import React from 'react';

class Contact extends React.Component {

  render() {
    return (
        <div className="contact container-fluid">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-xs-12">
              <h2>Hit me up.</h2>
              <p>I'm currently working full-time as a web developer, but I'm always happy to talk about contract work.</p>
              <a className="button primary-button" href="mailto:josh@joshcoles.com">Email me</a>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;

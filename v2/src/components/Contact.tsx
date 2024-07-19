import React from 'react';
// import Zoom from 'react-reveal/Zoom';

const contact = () => {
  return (
    <div className="contact container-fluid">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-xs-12">
          {/* <Zoom bottom duration={1000}> */}
            <h2>Hit me up.</h2>
          {/* </Zoom> */}
          <p>I'm always available for a coffee.</p>
          <a className="button primary-button" href="mailto:josh@joshcoles.com">Email me</a>
        </div>
      </div>
    </div>
  )
}

export default contact;

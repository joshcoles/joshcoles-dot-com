import React from 'react';

class BannerBackground extends React.Component {

  render() {
    return (
        <div className="banner-background container-fluid">
            <div className="row">
              <div className="col-md-11 col-xs-12 banner-content">
                <h1 className="banner-title">Josh Coles</h1>
                <p className="banner-description">Look at this website. Look at how nice it looks.</p>
              </div>
            </div>
        </div>
    );
  }
}


export default BannerBackground;
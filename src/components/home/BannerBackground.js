import React from 'react';
import SocialRow from '../SocialRow';

class BannerBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Josh Coles',
      position: 'Junior Full-Stack Web Developer',
      socialMediaInfo: {
        twitter: "http://twitter.com/joshcoles",
        facebook: "http://facebook.com/joshcoles",
        instagram: "http://instagram.com/joshkcoles",
        linkedin: "http://linkedin.com/in/joshcoles",
        github: "http://github.com/joshcoles",
      }
    };
  }


  render() {
    return (
        <div className="banner-background container-fluid">
          <SocialRow urls={this.state.socialMediaInfo} />
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
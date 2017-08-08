import React from 'react';
import SocialRow from './SocialRow';
import Main from './Main';
import Blog from './Blog';

class ProfileSection extends React.Component {

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
      <div className="site-header container-fluid">
        <div className="row row-centered">
          <div className="profile-section col-md-6 col-sm-12">
              <div className="profile-image-container">
                <img src="http://i.imgur.com/t8j1n0n.jpg" className="profile-image" alt={this.state.name} />
              </div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.position}</h2>
            <SocialRow urls={this.state.socialMediaInfo} />
          </div>
        </div>
      </div>
    );
  }
}


export default ProfileSection;

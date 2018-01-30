import React from 'react';
import SocialRow from './SocialRow';

const bannerBackground = (props) => {
  return (
    <div className="banner-background container-fluid">
      <SocialRow social={props.social.socialMediaInfo} />
      <div className="row">
        <div className="col-md-11 col-xs-12 banner-content">
          <h1 className="banner-title">{props.social.name}</h1>
          <p className="banner-description">{props.social.position}.</p>
        </div>
      </div>
    </div>
  );
}

export default bannerBackground;
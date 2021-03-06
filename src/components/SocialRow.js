import React from 'react';

const socialRow = (props) => {
  return (
    <div className="row">
      <div className="social-media-row">
        <ul>
          <li className="twitter"><a rel="noopener noreferrer" target="_blank" href={props.social.facebook}><i className="fa fa-twitter" aria-hidden="true" title="Josh Coles on Twitter."></i></a></li>
          <li className="facebook"><a rel="noopener noreferrer" target="_blank" href={props.social.facebook}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li className="instagram"><a rel="noopener noreferrer" target="_blank" href={props.social.instagram}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li className="linkedin"><a rel="noopener noreferrer" target="_blank" href={props.social.linkedin}><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li className="github"><a rel="noopener noreferrer" target="_blank" href={props.social.github}><i className="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default socialRow;
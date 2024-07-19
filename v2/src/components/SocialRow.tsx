import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialRow = (props) => {
  return (
    <div className="row">
      <div className="social-media-row">
        <ul>
          <li className="twitter">
            <a rel="noopener noreferrer" target="_blank" href={props.social.twitter}>
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </li>
          <li className="facebook">
            <a rel="noopener noreferrer" target="_blank" href={props.social.facebook}>
              <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>
          <li className="instagram">
            <a rel="noopener noreferrer" target="_blank" href={props.social.instagram}>
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </li>
          <li className="linkedin">
            <a rel="noopener noreferrer" target="_blank" href={props.social.linkedin}>
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </li>
          <li className="github">
            <a rel="noopener noreferrer" target="_blank" href={props.social.github}>
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default socialRow;
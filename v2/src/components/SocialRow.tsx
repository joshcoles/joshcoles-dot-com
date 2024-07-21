import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faInstagram,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SocialMediaProps } from '../types';

const icons: Record<string, IconProp> = {
	twitter: faTwitter,
	facebook: faFacebook,
	instagram: faInstagram,
	linkedin: faLinkedin,
	github: faGithub,
};

const socialRow: React.FC<SocialMediaProps> = ({ socialMediaInfo }) => (
	<div className="row">
		<div className="social-media-row">
			<ul>
				{Object.entries(socialMediaInfo).map(([name, url], index) => (
					<li className={name} key={index}>
						<a rel="noopener noreferrer" target="_blank" href={url}>
							<FontAwesomeIcon icon={icons[name]} />
						</a>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default socialRow;

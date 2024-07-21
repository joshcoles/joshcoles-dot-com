import React from 'react';
import SocialRow from './SocialRow';
import { BannerProps } from '../types';

const bannerBackground: React.FC<BannerProps> = ({ bannerInfo }) => (
	<div className="banner-background container-fluid">
		<SocialRow socialMediaInfo={bannerInfo.socialMediaInfo} />
		<div className="row">
			<div className="col-md-11 col-xs-12 banner-content">
				<h1 className="banner-title">{bannerInfo.name}</h1>
				<p className="banner-description">{bannerInfo.position}.</p>
			</div>
		</div>
	</div>
);

export default bannerBackground;

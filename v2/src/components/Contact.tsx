import React from 'react';

const contact: React.FC = () => (
	<div className="contact container-fluid">
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 col-xs-12">
				<h2>Hit me up.</h2>
				<p>I'm always available to chat.</p>
				<a className="button primary-button" href="mailto:josh@joshcoles.com">
					Email me
				</a>
			</div>
		</div>
	</div>
);

export default contact;

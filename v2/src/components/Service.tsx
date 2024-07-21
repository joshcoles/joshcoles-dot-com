import React from 'react';
import { ServiceProps } from '../types';

const service: React.FC<ServiceProps> = ({ serviceInfo }) => (
	<div className="service">
		<img src={serviceInfo.img} width="100" height="100" />
		<h2 className="service-name">{serviceInfo.title}</h2>
		<p className="service-description">{serviceInfo.description}</p>
	</div>
);

export default service;

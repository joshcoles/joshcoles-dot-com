import React from 'react';
import Service from './Service';
import { ServicesProps } from '../types';

const services: React.FC<ServicesProps> = ({ services }) => (
	<div className="services container-fluid">
		{services.map((service, index) => (
			<Service key={index + 10} serviceInfo={service}></Service>
		))}
	</div>
);
export default services;

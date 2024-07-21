import React from 'react';
import { ProjectsProps } from '../types';

const projects: React.FC<ProjectsProps> = ({ projects }) => (
	<section className="project-section container">
		<h2 className="project-heading">Some stuff I've built or worked on</h2>
		<div className="row projects-list">
			{projects.map((project, index) => {
				return (
					<div className="project-outer col-lg-4 col-sm-12" key={index}>
						<a href={project.url}>
							<div className="project-inner">
								<h2>{project.name}</h2>
								{project.description.map((paragraph, index) => {
									return <p key={index}>{paragraph}</p>;
								})}
								{project.stack.length > 0 && (
									<>
										<h3>Tech Stack: </h3>
										<ul className="tech-stack">
											{project.stack.map((tech, index) => {
												return <li key={index}>{tech}</li>;
											})}
										</ul>
									</>
								)}
							</div>
						</a>
					</div>
				);
			})}
		</div>
	</section>
);

export default projects;

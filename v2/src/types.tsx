export interface BannerInfo {
	name: string;
	position: string;
	socialMediaInfo: SocialMediaInfo;
}

export interface BannerProps {
	bannerInfo: BannerInfo;
}

export interface SocialMediaInfo {
	twitter: string;
	facebook: string;
	instagram: string;
	linkedin: string;
	github: string;
}

export interface SocialMediaProps {
	socialMediaInfo: SocialMediaInfo;
}

export interface ServiceInfo {
	img: string;
	title: string;
	description: string;
}

export interface ServiceProps {
	serviceInfo: ServiceInfo;
}

export interface ServicesProps {
	services: ServiceInfo[];
}

export interface ProjectsInfo {
	name: string;
	url: string;
	description: string[];
	stack: string[];
}

export interface ProjectsProps {
	projects: ProjectsInfo[];
}

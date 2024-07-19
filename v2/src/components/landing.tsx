import BannerBackground from './BannerBackground';
import Description from './Description';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

interface SocialInfo {
    name: string;
    position: string;
    socialMediaInfo: {
        twitter: string;
        facebook: string;
        instagram: string;
        linkedin: string;
        github: string;
    };
}
  
interface ServicesInfo {
    services: {
        title: string;
        img: string;
        caption: string;
        description: string;
    }[];
}

interface Data {
    social: SocialInfo;
    services: ServicesInfo;
}

interface LandingProps {
    info: Data;
}

function Landing({ info }: LandingProps) {
    return (
        <>
            <BannerBackground social={info.social}/>
            <Description />
            <Services services={info.services}/>
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default Landing;
import React from 'react';
import BannerBackground from './BannerBackground';
import Description from './Description';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Landing extends React.Component {

  render() {
    return (
        <div>
          <BannerBackground social={this.props.info.social}/>
          <Description />
          <Services services={this.props.info.services}/>
          <About />
          <Projects />
          <Contact />
        </div>
    );
  }
}


export default Landing;
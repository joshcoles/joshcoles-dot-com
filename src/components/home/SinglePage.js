import React from 'react';
import BannerBackground from './BannerBackground';
import Description from './Description';
import Services from './Services';
import About from './About';
import Projects from '../Projects';
import Instagram from './Instagram';
import Contact from './Contact';

class SinglePage extends React.Component {

  render() {
    return (
        <div>
          <BannerBackground />
          <Description />
          <Services />
          <About />
          <Instagram />
          <Projects />
          <Contact />
        </div>
    );
  }
}


export default SinglePage;
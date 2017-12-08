import React from 'react';
import BannerBackground from './BannerBackground';
import Description from './Description';
import Services from './Services';
import About from './About';
import Projects from '../Projects';
import Contact from './Contact';
import lake from '../../images/lake.jpeg';

class SinglePage extends React.Component {

  render() {
    return (
        <div>
          <BannerBackground />
          <Description />
          <Services />
          <About />
          <Projects />
          <Contact />
        </div>
    );
  }
}


export default SinglePage;
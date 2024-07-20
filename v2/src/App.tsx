import { useState } from 'react';
import Landing from './components/landing';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data] = useState({
    social: {
      name: 'Josh Coles',
      position: 'Web Developer',
      socialMediaInfo: {
        twitter: "http://twitter.com/joshcoles",
        facebook: "http://facebook.com/joshcoles",
        instagram: "http://instagram.com/joshkcoles",
        linkedin: "http://linkedin.com/in/joshcoles",
        github: "http://github.com/joshcoles",
      }
    },
    services: [
      {
        title: "Web Development",
        img: "website_icon.png",
        description: "Experienced in building responsive, user-friendly websites using a variety of modern JavaScript frameworks."
      },  
      {
        title: "Software Development",
        img: "software_icon.png",
        description: "Skilled in creating scalable software solutions to solve complex problems, with a strong emphasis on teamwork and collaboration."
      }, 
      {
        title: "A/B Testing",
        img: "cms_icon.png",
        description: "Proficient in building front-end experiments using tools like Optimizely and Google Optimize."
      },
    ]
  });

  return (
    <>
      <Landing info={data} />
    </>
  )
}

export default App;

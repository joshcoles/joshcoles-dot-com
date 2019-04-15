import './App.css';
import React from 'react';
import Landing from './components/Landing';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
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
          title: "Javascript",
          img: "js_icon.png",
          caption: "javascript by Oliviu Stoian from the Noun Project",
          description: "My first programming language. ES6/ES7+, Node, Express, jQuery, some React and Vue."
        },  {
          title: "CSS",
          img: "css_icon.png",
          caption: "file css by Chanut is Industries from the Noun Project",
          description: "Always down to make something responsive. CSS, SCSS, Bootstrap, Materialize, etc."
        }, {
          title: "CMS",
          img: "cms_icon.png",
          caption: "CMS by Danil Polshin from the Noun Project",
          description: "90% of the web uses Wordpress (I made that number up). Experience with Wordpress and Shopify."
        }, {
          title: "UI Design",
          img: "ui_icon.png",
          caption: "ui design by Setyo Ari Wibowo from the Noun Project",
          description: "I mean, kind of. I learned it on the streets?"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Landing info={this.state}/>
      </div>
    );
  }
}

export default App;




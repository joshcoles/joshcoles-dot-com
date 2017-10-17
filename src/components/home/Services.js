import React from 'react';

class Services extends React.Component {

  render() {
    return (
        <div className="services container-fluid">
          <div className="service">
            <img src="js_icon.png" title="javascript by Oliviu Stoian from the Noun Project" width="100" height="100"/>
            <h2 className="service-name">Javascript</h2>
            <p className="service-description">My first programming language. Vanilla, Node, Express, Knex, jQuery, some React and Angular.</p>
          </div>
          <div className="service">
          <img src="css_icon.png" title="file css by Chanut is Industries from the Noun Project" width="100" height="100"/>
            <h2 className="service-name">CSS</h2>
            <p className="service-description">Always down to make something responsive. CSS, SCSS, Bootstrap, Material Design.</p>
          </div>
          <div className="service">
          <img src="cms_icon.png" title="CMS by Danil Polshin from the Noun Project" width="100" height="100"/>
            <h2 className="service-name">CMS</h2>
            <p className="service-description">90% of the web uses Wordpress (I made that number up). Wordpress and Shopify.</p>
          </div>
          <div className="service">
          <img src="ui_icon.png" title="ui design by Setyo Ari Wibowo from the Noun Project" width="100" height="100"/>
            <h2 className="service-name">UI Design</h2>
            <p className="service-description">I mean, kind of. I'm not trained in UI design but I learned it on the streets.</p>
          </div>
        </div>
    );
  }
}


export default Services;
import React from 'react';

class Description extends React.Component {

  render() {
    return (
        <div className="description container-fluid">
            <div className="row">
              <div className="col-xs-8 col-xs-offset-2">
                <h3 className="description-content">I'm a junior developer with experience building <span className="emphasized">responsive</span>, <span className="emphasized">eye-catching</span> websites.</h3>
              </div>
            </div>
        </div>
    );
  }
}


export default Description;
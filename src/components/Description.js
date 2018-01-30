import React from 'react';

class Description extends React.Component {

  render() {
    return (
        <div className="description container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <h3 className="description-content">In the process of figuring out how to build <span className="emphasized">cool</span> websites. Here's what I've learned so far <span className="emphasized"><i className="fa fa-level-down" aria-hidden="true"></i></span></h3>
              </div>
            </div>
        </div>
    );
  }
}


export default Description;
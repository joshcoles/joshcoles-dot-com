import React from 'react';
import { faLevelDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const description: React.FC = () => (
  <div className="description container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <h3 className="description-content">In the process of figuring out how to build <span className="emphasized">~ cool things online ~</span>. Here's what I've learned so far <span className="emphasized"><FontAwesomeIcon icon={faLevelDown}/></span></h3>
      </div>
    </div>
  </div>
);


export default description;
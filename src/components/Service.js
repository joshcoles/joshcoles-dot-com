import React from 'react';

const service = (props) => {
  return (
    <div className="service">
      <img src={props.serviceInfo.img} alt={props.serviceInfo.caption} width="100" height="100" />
      <h2 className="service-name">{props.serviceInfo.title}</h2>
      <p className="service-description">{props.serviceInfo.description}</p>
    </div>  
  )
}

export default service;
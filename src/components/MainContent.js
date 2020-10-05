import React from 'react';

function MainContent(props) {

  return (
    <div className="main-content">
      <div className="location">{props.dataCityName}, {props.country}</div>
      <div className="temp">{props.tempData}°{props.unit}</div>
      <div className="humidity">Humidity: {props.humidData}%</div>
      <div className="description">Description: {props.description}</div>
    </div>
  );
}

export default MainContent;

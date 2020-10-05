import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="info current">
        <div className="title">Current</div>
        <div className="temp">{props.tempData}°{props.unit}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="info today">
        <div className="title">Today's High</div>
        <div className="temp">{props.maxTemp}°{props.unit}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="info tonight">
        <div className="title">Today's Low</div>
        <div className="temp">{props.minTemp}°{props.unit}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="info tomorrow">
        <div className="title">Tomorrow</div>
        <div className="temp">{props.maxTemp}°{props.unit}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

  return (
    <div className="header">
        <form className="search-bar" onSubmit={props.handleSubmit}>
          <input className="weather-input" type="text" placeholder="Enter a city" onChange={props.getCityName}></input>
          <button className="submit-button" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
        </form>
        <label className="switch">
          <input onClick={props.handleToggle} type="checkbox"></input>
          <span className="slider round"></span>
        </label> 
    </div>
  );
}

export default Header;

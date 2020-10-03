import React from 'react';

function Header() {
  return (
    <div className="header">
        <input className="weather-input" type="text" placeholder="Enter a city"></input>
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label> 
    </div>
  );
}

export default Header;

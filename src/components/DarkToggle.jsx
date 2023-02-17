import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../index.css';


export const DarkToggle = ({ darkTheme, toggleTheme }) => {
  return (
    <div className='dark-toggle-container'>
      <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} checked={darkTheme}/>
      <label htmlFor="checkbox" className="toggle-label">
        <FontAwesomeIcon icon={faSun} className="fa-sun"/>
        <FontAwesomeIcon icon={faMoon} className="fa-moon"/>
        <div className="ball"></div>
      </label>
    </div>

  )
}


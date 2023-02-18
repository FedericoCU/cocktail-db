import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import icon from '../images/Icono-1.png';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { DarkToggle } from './DarkToggle';


const Navbar = () => {

  const { darkTheme, setDarkTheme } = useGlobalContext();

  function handleDarkTheme() {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);

    document.body.classList.toggle('dark-theme', newTheme);
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to='/cocktail-db' >
          <div className="image-container">
            <img src={icon} alt="icon" className='logo-icono' />
            <img src={logo} alt="logo" className="logo" />
          </div>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/cocktail-db'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <div className="social-media">
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </div>
        </ul>
        <div className={darkTheme ? 'navbar-dark' : 'navbar-light'}>
          <DarkToggle darkTheme={darkTheme} toggleTheme={handleDarkTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

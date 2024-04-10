import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
	<div>
	<nav className='navbar'>
	<Link class="navbar-brand"  to='/' href="#"><img src="https://res.cloudinary.com/de4euasql/image/upload/v1712725273/download_xrdmic.png" className='image'/ ></Link>    
	<ul className='nav-list'>
	  <li className='nav-item'>
		<Link to='/' className='nav-link'>Home</Link>
	  </li>
	  <li className='nav-item'>
		<Link to='/about' className='nav-link'>About</Link>
	  </li>
	  <li className='nav-item'>
		<Link to='/skills' className='nav-link'>Skills</Link>
	  </li>
	  <li className='nav-item'>
		<Link to='/projects' className='nav-link'>Projects</Link>
	  </li>
	  <li className='nav-item'>
		<Link to='/contact' className='nav-link'>Contact</Link>
	  </li>
	  <li className='nav-item'>
		<Link to='/login' className='nav-link'>Login</Link>
	  </li>
	</ul>
  </nav>
  </div>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

const logo = require('../assets/images/Image5.png')

const NavBar = () => {
  return ( 
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <NavLink class="navbar-brand" to='/'>
        <img style={{ width: '100px'}} alt='logo' src={logo}/>
      </NavLink>
      <div className='d-flex justify-content-end'>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarText">
          <NavLink className="nav-link text-dark" to='/'>Your Q NavLink <span className="sr-only">(current)</span></NavLink>
          <NavLink className="nav-link text-dark" to='/'>Activity</NavLink>  
          <NavLink className="nav-link text-dark" to='/products'>Shop</NavLink>
          <NavLink className="nav-link text-dark" to='/' >Help Center</NavLink>
          <NavLink className="nav-link text-dark" to='/' >Log In</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
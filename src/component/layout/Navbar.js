import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className='container'>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
      <Link className="btn btn-outline-success my-2 my-sm-0 mr-2" to='/user/save'>Add User</Link>
      <Link className="btn btn-info" to='/'>Logout</Link>
  </div>
  </div>
</nav>
    )
}

export default Navbar;
import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Navbar_style.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={require("./images/icon.png")} alt="" width="120px" height="120px" className="d-inline-block align-text-top" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active" >HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link" activeClassName="nav-link--active" >ABOUT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Our_product" className="nav-link" activeClassName="nav-link--active" >OUR PRODUCT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Ourservices" className="nav-link" activeClassName="nav-link--active" >OUR SERVICES</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link" activeClassName="nav-link--active" >CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;;

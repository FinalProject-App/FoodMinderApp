import React from "react";
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';



const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
            Food Minder App
            <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
    </ul>
  </div>


        </a>
        
      </div>
    </div>
  </nav>;

export default Nav;

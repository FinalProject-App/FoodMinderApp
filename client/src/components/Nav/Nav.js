
import React, { Component } from 'react';
import { Link, withRouter,  } from 'react-router-dom';
import { auth, db } from '../../firebase';
import * as routes from "../../constants/routes";
import SignOutButton from '../SignOut';


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
            <ul>
              <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
              <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
              <li><SignOutButton /></li>
            </ul>


        </a>
        
      </div>
    </div>
  </nav>;

export default Nav;

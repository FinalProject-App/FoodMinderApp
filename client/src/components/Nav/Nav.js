import React from 'react';
import PropTypes from 'prop-types';

import SignOutButton from '../SignOut';


const Navigation = (props, { authUser }) =>
<nav className="navbar navbar-default navbar-static-top">
<div className="container-fluid">
  <div className="navbar-header">
  </div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
    </div>
 </nav>;

Navigation.contextTypes = {
authUser: PropTypes.object,
};
   
    
const NavigationAuth = () =>
<ul className="nav navbar-nav navbar-right js-anonymous-header">
<li><a href="/">FoodMinder</a>
<a href="/home">Home</a>
<a href="/account">Account</a>
 <SignOutButton /></li>
</ul>

const NavigationNonAuth = () =>
<ul className="nav navbar-nav navbar-right js-anonymous-header">
<li><a href="/landing">FoodMinder</a>
<a href="/signin">Sign In</a></li>
</ul>

export default Navigation;

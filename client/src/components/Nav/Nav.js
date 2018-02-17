import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props, { authUser }) =>
<nav className="navbar navbar-default">
{ authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
 </nav>

Navigation.contextTypes = {
authUser: PropTypes.object,
};
   
    
const NavigationAuth = () =>
<ul class="nav nav-pills">
<li role="presentation" class="active"><a href="/">FoodMinder</a></li>
<li role="presentation" class="active"><a href="/home">Home</a></li>
<li role="presentation" class="active"><a href="/account">Account</a></li>
</ul>

const NavigationNonAuth = () =>
<ul class="nav nav-pills">
<li role="presentation" class="active"><a href="/landing">FoodMinder</a></li>
<li role="presentation" class="active"><a href="/signin">Sign In</a></li>
</ul>

export default Navigation;

import React, { Component } from 'react';
import { Link, withRouter,  } from 'react-router-dom';
import { auth, db } from '../../firebase';
import * as routes from "../../constants/routes";
// import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default withRouter(SignOutButton);
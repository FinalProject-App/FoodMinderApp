import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
    <div>
  <h1>SignIn</h1>
      <SignInForm history={history} />
    <SignUpLink />
  </div>

  export default SignInPage
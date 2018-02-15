import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {Navigation}  from "./components/Nav";
import withAuthentication from "./components/withAuthentication";
import LandingPage from './pages/Landing';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './pages/Home';
import Form from "./pages/Form";
import ItemsList from "./pages/ItemsList"
import AccountPage from './components/Account';
import * as routes from './constants/routes';

const App = () =>
  <Router>
    <div>
    <Navigation />
   
    
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.FORM} component={() => <Form />} />
      <Route exact path={routes.MYLIST} component={() => <ItemsList />} />
    </div>
  </Router>;

export default withAuthentication(App);

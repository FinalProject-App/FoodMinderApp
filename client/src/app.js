// import React, { Component } from 'react';
import React from "react";import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemsList from "./pages/ItemsList";
import Home from "./pages/Home";
import Form from "./pages/Form";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SignUpPage from "./components/SignUp";
import * as routes from "./constants/routes";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/Items" component={ItemsList} />
        <Route  exact path="/Form" component={Form} />
        <Route component={NoMatch} />
         <Route exact path= "/SignUp"component={() => <SignUpPage />}
      />
      </Switch>
    </div>
  </Router>;



export default App;


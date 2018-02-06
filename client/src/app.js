// import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemsList from "./pages/ItemsList";
import SwapItems from "./pages/SwapItems"
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";



const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route  path="/" component={ItemsList} />
        <Route  path="/Items" component={ItemsList} />
        <Route  path="/Items/:id" component={Detail} />
        <Route  path="/swap/" component={SwapItems} />
        <Route  path="/swap/:id" component={Detail} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;



export default App;


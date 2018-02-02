import React from "react";
import Items from "./pages/Items";
import SwapItems from "./pages/SwapItems";
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <Items />
    <SwapItems />
  </div>
);

export default App;

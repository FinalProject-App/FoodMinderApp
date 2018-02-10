import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Welcome!</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/Form">Add Item</a></li>
            <li><a href="/Item">View Items</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;
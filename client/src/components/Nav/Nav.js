// import React from "react";

// const Nav = () =>
//   <nav className="navbar navbar-center">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="collapsed navbar-toggle">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" /> <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>
//         <a href="/" className="navbar-brand">

//             foodMinder App
//         </a>
//       </div>
//     </div>
//   </nav>;

// export default Nav;


import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
    </ul>
  </div>

export default Navigation;
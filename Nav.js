import React from "react";
import Popular from "./Popular";
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

function Nav(){
  return(
  <ul className="nav">
    <li>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/battle">
        Battle
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/popular">
        Popular
      </NavLink>
    </li>
  </ul>
)
}

module.exports = Nav;

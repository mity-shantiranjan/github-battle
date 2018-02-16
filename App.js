import React from "react";
import Popular from "./Popular";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Route as Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <Router>
      <div className="container">
        <Nav/>
        <Route path="/popular" component={Popular} />
      </div>
      </Router>
    )
  }
}

module.exports = App;

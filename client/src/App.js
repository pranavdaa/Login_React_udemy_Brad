import React, { Fragment } from "react";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import ContactState from "../src/context/contact/contactState";
function App() {
  return (
    <ContactState>
      <Router>
        <Fragment className="App">
          <Navbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/home-page/home-component";
import AboutPage from "./components/about-page/about-component";
import ContactPage from "./components/contact-page/contact-component";

const App = (props) => {
  return (
    <div className="root-div">
      <Router>
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/home" component={HomePage}></Route>
          {/* <Route exact path="/projects" component={}></Route> */}
          <Route exact path="/contact" component={ContactPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

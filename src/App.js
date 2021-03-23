import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/home-page/home-component";
import AboutPage from "./components/about-page/about-component";
import ContactPage from "./components/contact-page/contact-component";
import ProjectsPage from "./components/projects-page/projects-page.component";
import ProjectTemplate from "./components/project-template/project-template.component";
import PopUp from "./components/pop-up/pop-up.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      popupIsOpen: false,
      burgerMenuIsOpen: false,
    };
    console.log(this);
  }

  handlePopup = () => {
    const currentState = this.state.popupIsOpen;
    this.setState({ popupIsOpen: !currentState });
  };

  handleBurgerMenu = () => {
    const currentState = this.state.burgerMenuIsOpen;
    this.setState({ burgerMenuIsOpen: !currentState });
  };

  render() {
    return (
      <div className="root-div">
        <Router>
          <NavBar
            handlePopup={this.handlePopup}
            handleBurgerMenu={this.handleBurgerMenu}
            burgerMenuIsOpen={this.state.burgerMenuIsOpen}
          ></NavBar>

          {this.state.popupIsOpen ? (
            <PopUp handlePopup={this.handlePopup} />
          ) : null}

          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              exact
              path="/project-template"
              component={ProjectTemplate}
            ></Route>
            <Route
              exact
              path="/about"
              render={(props) => (
                <AboutPage {...props} handlePopup={this.handlePopup} />
              )}
            ></Route>
            <Route
              exact
              path="/home"
              render={(props) => (
                <HomePage {...props} handlePopup={this.handlePopup} />
              )}
            ></Route>
            <Route exact path="/projects" component={ProjectsPage}></Route>
            <Route
              exact
              path="/contact"
              render={(props) => (
                <ContactPage {...props} handlePopup={this.handlePopup} />
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

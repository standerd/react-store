import React, { Component } from "react";
import UserState from "./containers/UserState/UserState";
import "./App.css";
import Landing from "./containers/About/about";
import Products from "./containers/Products/Products";
import NavBar from "./containers/Navbar/navBar";
import Profile from "./containers/profile/profile";
import { Route, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    isLoggedIn: true,
    userName: "Dewald",
    id: "8314112353323",
    eMail: "username@gmail.com",
    profession: "Software Developer"
  };

  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="App">
        {/* NAVBAR Componentalways loads */}
        <nav>
          <NavBar nav={this.props.location.pathname} />
        </nav>
        <header className="App-header">
          <Route
            path="/"
            exact
            component={() => (
              <UserState
                isLoggedIn={this.state.isLoggedIn}
                userName={this.state.userName}
              />
            )}
          />
        </header>

        {/* Balance of components only loads on route change */}
        <Route
          path="/about"
          component={() => <Landing welcome="Welcome to Our Site" />}
        />
        <Route
          path="/profile"
          component={() => (
            <Profile
              name={this.state.userName}
              id={this.state.id}
              mail={this.state.eMail}
              prof={this.state.profession}
            />
          )}
        />

        <Route path="/products" component={Products} />
      </div>
    );
  }

  r;
}

export default withRouter(App);

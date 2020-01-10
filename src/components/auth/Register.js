import React, { Component } from "react";
import OktaAuth from "@okta/okta-auth-js";
import { withAuth } from "@okta/okta-react";
import "./styles.css";


export default withAuth(
  class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: null,
        sessionToken: null,
        username: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      this.oktaAuth = new OktaAuth({ url: props.baseUrl });
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }
    componentDidUpdate() {
      this.checkAuthentication();
    }

    handleSubmit = e => {
      e.preventDefault();
      this.oktaAuth
        .signIn({
          username: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        })
        .then(res =>
          this.setState({
            sessionToken: res.sessionToken
          })
        )
        .catch(err => console.log("Found an error", err));
    };

    handleUsernameChange = e => {
      this.setState({ username: e.target.value });
    };

    handlePasswordChange = e => {
      this.setState({ password: e.target.value });
    };
    handlefirstNameChange = e => {
      this.setState({ firstName: e.target.value });
    };
    handlelastNameChange = e => {
      this.setState({ lastName: e.target.value });
    };
    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      return (
        <div class="wrapper ">
          <div id="formContent">
            <h2>Register Form</h2>

            <form className="form" onSubmit={this.handleSubmit}>
              <label>
                FirstName:
                <input
                  id="firstName"
                  type="firstName"
                  class="fadeIn third"
                  value={this.state.firstName}
                  onChange={this.handlefirstNameChange}
                />
                LastName:
                <input
                  id="lastName"
                  type="lastName"
                  class="fadeIn third"
                  value={this.state.lastName}
                  onChange={this.handlelastNameChange}
                />
                Username(Email Id):
                <input
                  id="username"
                  type="text"
                  class="fadeIn second"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
                Password:
                <input
                  id="password"
                  type="password"
                  class="fadeIn third"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                /> <span> <br/></span>
                Confirm Password:
                <input
                  id="confirm Password"
                  type="password"
                  class="fadeIn third"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </label>

              <input
                id="submit"
                type="submit"
                class="fadeIn fourth"
                value="Register"
              />
            </form>
          </div>
        </div>
      );
    }
  }
);

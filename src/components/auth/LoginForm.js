
import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import './styles.css'
import {Link} from 'react-router-dom';

export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

  }

  handleSubmit= (e) => {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => this.setState({
      sessionToken: res.sessionToken
    }))
    .catch(err => alert('Found an error', err));
  }

  handleUsernameChange=(e)=> {
    this.setState({username: e.target.value});
  }

  handlePasswordChange=(e)=> {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    }

    return (
      <div class="wrapper ">
        <div id="formContent">
      <h2>Login Form</h2>

      <form className = 'form' onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            id="username" type="text" class="fadeIn second"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
          Password:
          <input
            id="password" type="password" class="fadeIn third"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </label>
        <input id="submit" type="submit" class="fadeIn fourth" value="Login" />
      </form>

 <div id="formFooter">
   <Link to="/forgotPassword">Forgot Password?</Link>
  <span> <Link to="/register">New User/Create an account</Link> </span>
    </div>

      </div>
      </div>
    );
  }
});
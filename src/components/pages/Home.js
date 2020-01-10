import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the student portal,{' '}
            <Link to="/courses">click here</Link>
          </p>
          
        </div>
      ) : (
        <div>
          <p className="lead">
            If you are a new member, please get registered.
            already have, please proceed to login
          </p>
          
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button> 
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">HCL training portal</h1>
          {mainContent}
        </div>
      );
    }
  }
);
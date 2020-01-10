import React from "react";
import { Link } from "react-router-dom";
import "../auth/styles.css";
import { withAuth } from "@okta/okta-react";
import { FaTrophy, FaCartPlus } from "react-icons/fa";
import { ButtonContainer } from "../pages/Tabs/Button";

export default withAuth(
  class Navbar extends React.Component {
    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };
    render() {
      return (
        <div className="header-color">
          <nav className="navbar navbar-expand-sm navbar-dark mb-4">
            <div className="container">
              <div>
                <FaTrophy />
              </div>
              <Link className="navbar-brand" to="/">
                Training Portal
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses">
                      StudentBoard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      ContactUs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="ml-auto">
                      <ButtonContainer>
                        <FaCartPlus />
                        my courses
                      </ButtonContainer>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <ButtonContainer
                    className="btn btn-light btn-lg"
                    onClick={this.login}
                  >
                    Login
                  </ButtonContainer>
                  </li>
                  
                  <li className="nav-item">
                    <ButtonContainer
                      className="btn btn-dark btn-lg"
                      onClick={this.logout}
                    >
                      Logout
                    </ButtonContainer>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
);

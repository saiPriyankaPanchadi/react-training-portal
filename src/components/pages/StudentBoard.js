import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import TabsContent from "./TabsContent";
import UpComings from "./UpComings";

class StudentBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: ""
    };
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserName } = this.state;

    return (
      <div>
        <h3 className="ui container">
          Welcome {currentUserName} on student Portal
        </h3>

        <div style={{ width: "100%", height: '100%',  margin: "auto" }}>
          <Grid className="studentsInfo">
            <Cell col={12}>
              <div className="category-tabs">
                <TabsContent />
              </div>
            </Cell>
          </Grid>
        </div>
        <div className="page-footer">
      <UpComings/>
      </div>
      </div>
    );
  }
}

export default StudentBoard;

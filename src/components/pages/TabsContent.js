import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DevopsTab from "./Tabs/DevopsTab";
import Courses from "./Tabs/Courses";
import "./style.css";


class TabsContent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
      <Tabs
        className="tabs"
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex =>
          this.setState({
            tabIndex
          })
        }
      >
        <TabList className="tab-nav-container">
          <Tab className={`${this.state.tabIndex === 0 ? "tab-selected active" : null}`}>
            Full stack
            <p style={{}}/>
          </Tab>
          <Tab className={`${this.state.tabIndex === 1 ? "tab-selected active" : null}`}>
           WebDevolpment
           <p style={{}}/>
          </Tab>
          <Tab className={`${this.state.tabIndex === 2 ? "tab-selected active" : null}`}>
          Devops
          <p style={{}}/>
          </Tab>
        </TabList>
        <TabPanel>
            <Courses/>
        </TabPanel>
        <TabPanel>
           WebDevolpment
        </TabPanel>
        <TabPanel>
            <DevopsTab/>
        </TabPanel>
      </Tabs>
      
      </div>
    );
  }
}
export default TabsContent;

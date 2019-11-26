import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import config from "./dev-config";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainContent from "./components/Layout/MainContent/MainContent";
import Home from "./components/Layout/Home/Home";
import Callback from "./components/Layout/Callback/Callback";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {}
    };
  }

  getCompanyInfo() {
    let apiUrl = `${config.API_BASE_URL}/companyInfo`;
    console.log("api url=", apiUrl);
    axios.get(apiUrl).then(response => {
      console.log("comp Info: ", response.data);
      this.setState({ companyInfo: response.data });
    });
  }

  componentDidMount() {
    this.getCompanyInfo();
  }

  render() {
    return (
      <div className="App">
        <Header companyInfo={this.state.companyInfo} />
        <Router>
          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/callback" exact component={Callback}></Route>
            <Route path="/main" exact component={MainContent}></Route>
          </Switch>
        </Router>
        {/* <MainContent employeeInfo={this.state.employeeInfo} /> */}
      </div>
    );
  }
}

export default App;

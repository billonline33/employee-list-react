import React, { Component } from "react";
import { connect } from "react-redux";
import SortBy from "../../Employee/SortBy";
import Card from "../../Employee/Card";
import { Col, Row } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "./MainContent.css";
import axios from "axios";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      companyInfo: {},
      employeeInfo: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  getEmployeeInfo() {
    let apiUrl = `$/api/employees?_sort=${this.props.sortByField}&_order=asc&${
      this.props.sortByField
    }_like=${this.state.searchValue}`;

    console.log("apiUrl=",apiUrl);
    axios.get(apiUrl).then(response => {
      console.log("employees Info: ", response.data);
      this.setState({ employeeInfo: response.data });
    });
  }

  handleSearchChange(e) {
    this.setState({ searchValue: e.target.value }, function() {
      this.getEmployeeInfo();
    });
    console.log("search text=", this.state.searchValue);
  }

  handleSortByChange = sortByField => {
    this.setState({ sortByField }, function() {
      console.log("this.state.sortByFiled=", this.props.sortByField);
      this.getEmployeeInfo();
    });
  };

  componentDidMount() {
    console.log("componentDidMount Run");
    this.getEmployeeInfo();
  }

  render() {
    var paddingTop = {
      "padding-top": "13px"
    };

    console.log("the.props.sortByField=", this.props.sortByField);

    return (
      <div className={"content-area"}>
        <div className={"floatLeft"}>
          <h1>Our Employees</h1>
        </div>
        <div className={"floatRight"}>
          <div className={"floatLeft"}>
            <SortBy />
          </div>
          <div className={"floatLeft labelStyle paddingTop"}>Search: </div>
          <div className={"floatLeft"} style={paddingTop}>
            <FormControl
              type="text"
              value={this.state.searchValue}
              placeholder="Enter text"
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
        <Row>
          <Col xs={12}>
            {this.state.employeeInfo.map((item, index) => {
              return <Card employeeInfo={item} key={item.id} />;
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortByField: state.SortBy.sortByField
});

MainContent = connect(
  mapStateToProps,
  null
)(MainContent);

export default MainContent;

import React from "react";
import { SplitButton, MenuItem } from "react-bootstrap";
import { applySortBy } from "../../reducers/sortBy";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadEmployeeList } from "../../reducers/employeeList";

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSortByChange = sortByField => {
    this.props.applySortBy(sortByField);
    this.props.loadEmployeeList(sortByField, "");
  };

  render() {
    const paddingStyle = {
      padding: "8px",
      float: "left"
    };

    return (
      <div>
        <div>
          <div className={"floatLeft labelStyle"}> Sort by:</div>
          <div className={"floatLeft"} style={paddingStyle}>
            <SplitButton bsSize="large" title={this.props.sortByField}>
              <MenuItem eventKey="firstName" onSelect={this.handleSortByChange}>
                firstName
              </MenuItem>
              <MenuItem eventKey="lastName" onSelect={this.handleSortByChange}>
                lastName
              </MenuItem>
              <MenuItem eventKey="jobTitle" onSelect={this.handleSortByChange}>
                jobTitle
              </MenuItem>
              <MenuItem eventKey="age" onSelect={this.handleSortByChange}>
                age
              </MenuItem>
              <MenuItem
                eventKey="dateJoined"
                onSelect={this.handleSortByChange}
              >
                dateJoined
              </MenuItem>
            </SplitButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ applySortBy, loadEmployeeList }, dispatch);

const mapStateToProps = state => ({
  sortByField: state.SortBy.sortByField
});

SortBy = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBy);

export default SortBy;

import { combineReducers } from "redux";
import SortBy from "./sortBy";
import EmployeeList from "./employeeList";

export default combineReducers({
  SortBy,
  EmployeeList
});

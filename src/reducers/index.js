import { combineReducers } from "redux";
import SortBy from "./sortBy";
import EmployeeList from "./employeeList";
import Session from "./session";

export default combineReducers({
  SortBy,
  EmployeeList,
  Session
});

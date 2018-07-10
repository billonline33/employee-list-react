import axios from "axios";
import config from "../dev-config";
const LOAD_EMPLOYEE_LIST = "employeeList/LOAD_EMPLOYEE_LIST";

const initialState = {
  employeeInfo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEE_LIST:
      return {
        ...state,
        employeeInfo: action.employeeInfo
      };
    case "REQUEST_FAILED":
      return state;
    default:
      return state;
  }
};

const getEmployeeInfo = (sortByField, searchValue) => {
  let apiUrl = `${
    config.API_BASE_URL
  }/employees?_sort=${sortByField}&_order=asc&${sortByField}_like=${searchValue}`;
  return axios.get(apiUrl);
};

export const loadEmployeeList = (sortByField, searchValue) => {
  return dispatch => {
    getEmployeeInfo(sortByField, searchValue)
      .then(response => {
        dispatch({
          type: LOAD_EMPLOYEE_LIST,
          employeeInfo: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "REQUEST_FAILED",
          error
        });
      });
  };
};

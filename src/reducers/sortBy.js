const APPLY_SORTBY = "sortBy/APPLY_SORTBY";

const initialState = {
  sortByField: "firstName"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_SORTBY:
      return {
        ...state,
        sortByField: action.sortByField
      };

    default:
      return state;
  }
};

export const applySortBy = sortByField => {
  return dispatch => {
    dispatch({
      type: APPLY_SORTBY,
      sortByField: sortByField
    });
  };
};

import { ADD_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
  test: "",
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        test: "Redux store work perfectly!",
      };

    default:
      return state;
  }
};

export default contentReducer;

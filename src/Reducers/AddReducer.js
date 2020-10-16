import { ADD } from "../Actions/ActionsTypes";

const initialState = {
  results: 0,
};
const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        results: state.results + action.payload,
      };
    default:
      return state;
  }
};

export default AddReducer;

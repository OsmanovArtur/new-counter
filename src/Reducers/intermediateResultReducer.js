import { INTERMEDIATE_RESULT, DELETE_ITEM } from "../Actions/ActionsTypes";

const secondState = {
  intermediateResult: [],
};

const intermadiateResultReducer = (state = secondState, action) => {
  switch (action.type) {
    case INTERMEDIATE_RESULT:
      const newArr = [...state.intermediateResult];
      newArr.push(action.payload);
      return {
        ...state,
        intermediateResult: newArr,
      };
    case DELETE_ITEM:
      const intermediateResult = [...state.intermediateResult];

      intermediateResult.splice(action.payload, 1);
      return {
        ...state,
        intermediateResult,
      };

    default:
      return state;
  }
};

export default intermadiateResultReducer;

import { ADD, INTERMEDIATE_RESULT, DELETE_ITEM } from "./ActionsTypes";

export const changeCounter = (number) => {
  return {
    type: ADD,
    payload: number,
  };
};
export const saveIntermediateResult = (number) => {
  return {
    type: INTERMEDIATE_RESULT,
    payload: number,
  };
};

export const deleteItem = (index) => {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
};

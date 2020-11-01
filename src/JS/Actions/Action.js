import {
  ADD_TASK,
  DELETE_ITEM,
  EDIT_ITEM,
  CHECK_ITEM,
} from "../Constants/actionTypes";
// export const increment = () => ({ type: INCREMENT });

// export const decrement = () => ({ type: DECREMENT });

export const addItem = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};
export const editItem = (payload) => {
  return {
    type: EDIT_ITEM,
    payload,
  };
};
export const checkItem = (payload) => {
  return {
    type: CHECK_ITEM,
    payload,
  };
};

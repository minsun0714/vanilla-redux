import { legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      // case ADD:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      // case DELETE:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

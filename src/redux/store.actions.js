import formatDistanceToNow from "date-fns/formatDistanceToNow";
import nextId from "react-id-generator";
import actionTypes from "./action.types";

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: nextId(),
    done: false,
    title,
    className: '',
    date: Date.now(),
    created: formatDistanceToNow(Date.now(), {addSuffix: true, includeSeconds: true}),
  }
});

export const removeTodo = id => ({
  type: actionTypes.REMOVE_TODO,
  payload: id,
});

export const editTodo = (id, value) => ({
  type: actionTypes.EDIT_TODO,
  payload: {id, value}
});

export const editChange = value => ({
  type: actionTypes.EDIT_CHANGE,
  payload: value,
});

export const editSubmit = (id, value) => ({
  type: actionTypes.EDIT_SUBMIT,
  payload: {id, value}
});

export const checkItemDone = id => ({
  type: actionTypes.CHECK_ITEM_DONE,
  payload: id,
});

export const clearComplete = () => ({
  type: actionTypes.CLEAR_COMPLETE
});

export const setFilter = event => ({
  type: actionTypes.SET_FILTER,
  payload: event.target.textContent,
});


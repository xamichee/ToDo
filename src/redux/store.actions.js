import formatDistanceToNow from "date-fns/formatDistanceToNow";
import nextId from "react-id-generator";

export const addTodo = title => ({
  type: 'ADD_TODO',
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
  type: 'REMOVE_TODO',
  payload: id,
});

export const editTodo = (id, value) => ({
  type: 'EDIT_TODO',
  payload: {id, value}
});

export const editChange = value => ({
  type: 'EDIT_CHANGE',
  payload: value,
});

export const editSubmit = (id, value) => ({
  type: 'EDIT_SUBMIT',
  payload: {id, value}
});

export const checkItemDone = id => ({
  type: 'CHECK_ITEM_DONE',
  payload: id,
});

export const clearComplete = () => ({
  type: 'CLEAR_COMPLETE'
});

export const setFilter = event => ({
  type: 'SET_FILTER',
  payload: event.target.textContent,
});


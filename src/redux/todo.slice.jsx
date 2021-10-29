import { createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import initialState from "../InitialState/initialState";

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo(state, action) {
      state.todos.push({
        id: nextId(),
        done: false,
        title: action.payload,
        className: '',
        date: Date.now(),
        created: formatDistanceToNow(Date.now(), {addSuffix: true, includeSeconds: true})
      })
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    editTodo(state, action) {
      const {id, value} = action.payload;
      state.todos = state.todos.map(todo => todo.id === id ?
        {...todo, className: 'editing'} : todo);
      state.editingValue = value;
      state.editingId = id;
    },

    editChange(state, action) {
      state.editingValue = action.payload
    },

    editSubmit(state, action) {
      const {id, editingValue} = action.payload;
      state.todos = state.todos.map(todo => todo.id === id ?
        {...todo, title: editingValue, className: ''} : todo)
      state.editingValue = ''
    },

    checkItemDone(state, action) {
      state.todos = state.todos.map(todo => todo.id === action.payload ?
        {...todo, done: !todo.done} : todo)
    },

    clearComplete(state) {
      state.todos = state.todos.filter(todo => !todo.done)
    },

    setFilter(state, action) {
      state.activeFilter = action.payload
      state.filtersList = state.filtersList.map((filter) =>
        action.payload === filter.name ? {...filter, className: 'selected'} : {...filter, className: ''})
    },
  }
})

export const {
  addTodo,
  removeTodo,
  editTodo,
  editChange,
  editSubmit,
  checkItemDone,
  clearComplete,
  setFilter
} = todoSlice.actions;

export default todoSlice.reducer;


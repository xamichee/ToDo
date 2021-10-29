import { createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

// import todoList from "../InitialState/initialState";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id: '1', done: false, title: 'Пункт 1', className: '', date: Date.now(), created: null},
      {id: '2', done: false, title: 'Пункт 2', className: '', date: Date.now(), created: null},
      {id: '3', done: false, title: 'Пункт 3', className: '', date: Date.now(), created: null},
    ],
    filtersList: [
      {id: 1, name: 'All', className: 'selected'},
      {id: 2, name: 'Active', className: ''},
      {id: 3, name: 'Completed', className: ''},
    ],
    activeFilter: 'All',
    editingValue: '',
    editingId: '',
  },
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
      state.todos = state.todos.map(todo => todo.id === action.payload.id ?
        {...todo, className: 'editing'} : todo)
      state.editingValue = action.payload.value
      state.editingId = action.payload.id
    },

    editChange(state, {payload}) {
      state.editingValue = payload
    },

    editSubmit(state, action) {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ?
        {...todo, title: action.payload.value, className: ''} : todo)
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


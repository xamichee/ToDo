import initialState from "../InitialState/initialState";
import actionTypes from "./action.types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ?
          {...todo, className: 'editing'} : todo ),
        editingValue: action.payload.value,
        editingId: action.payload.id,
      }
    case actionTypes.EDIT_SUBMIT:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ?
          {...todo, title: action.payload.value, className: ''} : todo ),
        editingValue: ''
      }
    case actionTypes.EDIT_CHANGE:
      return {
        ...state,
        editingValue: action.payload
      }
    case actionTypes.CHECK_ITEM_DONE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ?
          {...todo, done: !todo.done} : todo ),
      }
    case actionTypes.CLEAR_COMPLETE:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.done)
      }
    case actionTypes.SET_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
        filtersList: state.filtersList.map((filter) =>
          action.payload === filter.name ? { ...filter, className: 'selected' } : { ...filter, className: '' })
      }
    default: return state;
  }
};

export default reducer;
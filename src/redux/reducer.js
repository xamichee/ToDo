import initialState from "../InitialState/initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ?
          {...todo, className: 'editing'} : todo ),
        editingValue: action.payload.value,
        editingId: action.payload.id,
      }
    case 'EDIT_SUBMIT':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ?
          {...todo, title: action.payload.value, className: ''} : todo ),
        editingValue: ''
      }
    case 'EDIT_CHANGE':
      return {
        ...state,
        editingValue: action.payload
      }
    case 'CHECK_ITEM_DONE':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ?
          {...todo, done: !todo.done} : todo ),
      }
    case 'CLEAR_COMPLETE':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.done)
      }
    case 'SET_FILTER':
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
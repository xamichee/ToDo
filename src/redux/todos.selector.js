import {createSelector } from 'reselect';

const todosSelector = state => state.todos.todos;
const filterSelector = state => state.todos.activeFilter;

const todosForRender = createSelector(
  todosSelector, filterSelector,
  (todos, activeFilter) => {
    console.log(todos, activeFilter)
    todos.filter((elem) => {
      switch (activeFilter) {
        case 'Completed':
          return elem.done;
        case 'Active':
          return !elem.done;
        default:
          return true;
      }
    })
  }
);

export default todosForRender;
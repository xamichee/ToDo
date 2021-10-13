import {createSelector } from 'reselect';

const todosSelector = state => state.todos;
const filterSelector = state => state.activeFilter;

const todosForRender = createSelector(
  todosSelector, filterSelector,
  (todos, activeFilter) => todos.filter((elem) => {
    switch (activeFilter) {
      case 'Completed':
        return elem.done;
      case 'Active':
        return !elem.done;
      default:
        return true;
    }
  })
);

export default todosForRender;
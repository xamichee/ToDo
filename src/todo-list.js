import React from "react";
import './todo-list.css';
import TodoListItem from "./todo-list-item";

const TodoList = (props) => {
    return (
      <ul className='todo-list'>
        { props.quests.map(elem => {
          return (
            <li key={elem.id} className={elem.className}>
              <TodoListItem quest={elem} />
              {elem.className === 'editing' ? <input type="text" className="edit" value="Editing task" /> : null}
            </li>
          )}
        )}
      </ul>
    )
  }
;

export default TodoList;


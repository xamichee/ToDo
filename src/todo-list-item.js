import React from "react";
import './todo-list-item.css';

const TodoListItem = ({quest}) => {
  return (
      <div className="view">
        <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{quest.title}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" />
      </div>
  );
};

export default TodoListItem;
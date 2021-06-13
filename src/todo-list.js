import React, {Component} from "react";
import './todo-list.css';
import TodoListItem from "./todo-list-item";

export default class TodoList extends Component {

  render() {
    const {quests, onDelete} = this.props;

    return (
      <ul className='todo-list'>
        {quests.map(elem => <TodoListItem
          quest={elem}
          onDelete={() => onDelete(elem.id)}/>)}
      </ul>
    )
  }
}



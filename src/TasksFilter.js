import React, {Component} from "react";
import './TasksFilter.css'

export default class TasksFilter extends Component {

  render() {
    const {elem, onFilter} = this.props;

    return (
      <li key={elem.id}>
        <button
          className={elem.className}
          onClick={onFilter}>{elem.name}</button>
      </li>
    );
  }
}

import React, {Component} from "react";
import './TasksFilter.css'

export default class TasksFilter extends Component {

  render() {
    const {elem} = this.props;

    return (
      <li key={elem.id}>
        <button className={elem.className}>{elem.name}</button>
      </li>
    );
  }
}

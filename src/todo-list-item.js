import React, {Component} from "react";
import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false
  };

  onCheckClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  };

  render() {
    let {title, id, className} = this.props.quest;
    const {done} = this.state;

    if (done) {
      className += 'completed'
    }

    return (
      <li key={id} className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onCheckClick}/>
          <label>
            <span className="description">{title}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"/>
          <button
            className="icon icon-destroy"
            onClick={this.props.onDelete}/>
        </div>
        {className === 'editing' ? <input type="text" className="edit" value="Editing task"/> : null}
      </li>
    );
  }
};

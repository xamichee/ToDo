import React, {Component} from "react";
import './todo-list-item.css';


export default class TodoListItem extends Component {

  // state = {
  //   done: false
  // };
  //
  // onCheckClick = () => {
  //   console.log(this.props.quest.done)
  // };

  render() {
    let {title, id, className, done, date} = this.props.quest;
    // const {done} = this.state;

    if (done) {
      className += ' completed'
    }

    return (
      <li key={id} className={className}>
        <div className="view">
          <input className="toggle" type="checkbox"
                 checked={(done) ? true : false}
                 onChange={this.props.onCheckClick} />
          <label>
            <span className="description">{title}</span>
            <span className="created">{date}</span>
          </label>
          <button
            className="icon icon-edit"/>
          <button
            className="icon icon-destroy"
            onClick={this.props.onDelete}/>
        </div>
        {className === 'editing' ? <input type="text" className="edit" value="Editing task"/> : null}
      </li>
    );
  }
};

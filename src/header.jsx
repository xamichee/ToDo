import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './header.css';

export default class Header extends Component {

  static defaultProps = {
    addItem: () => alert('Ошибка, операция не может быть выполнена'),
  };

  static propTypes = {
    addItem: PropTypes.func
  }

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  render () {
    const {addItem} = this.props

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          addItem(this.state.label);
          this.setState({
            label: ''
          })

        }}>
          <input
            type='text'
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends Component {
  static defaultProps = {
    addItem: () => {},
  };

  static propTypes = {
    addItem: PropTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (ev) => {
    this.setState({
      label: ev.target.value,
    });
  };

  render() {
    const { addItem } = this.props;
    const { label } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            addItem(label);
            this.setState({
              label: '',
            });
          }}
        >
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}
          />
        </form>
      </header>
    );
  }
}

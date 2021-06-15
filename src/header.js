import React, {Component} from 'react';
import './header.css';

class Header extends Component {

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

export default Header;


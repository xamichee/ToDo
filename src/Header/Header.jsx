import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../redux/store.actions';

import './Header.css';

function Header({addTodo: addTodoItem}) {
  const [label, setLabel] = useState('');

  Header.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  const onLabelChange = (ev) => setLabel(ev.target.value);

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          addTodoItem(label);
          setLabel('');
        }}
      >
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onLabelChange}
          value={label}
        />
      </form>
    </header>
  );
}

const mapDispatchToProps = ({addTodo});

export default connect(null, mapDispatchToProps)(Header);

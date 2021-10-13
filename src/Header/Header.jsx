import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../redux/store.actions';

import './Header.css';

function Header({dispatch}) {
  const [label, setLabel] = useState('');

  const onLabelChange = (ev) => setLabel(ev.target.value);

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          dispatch(addTodo(label));
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

export default connect()(Header);

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

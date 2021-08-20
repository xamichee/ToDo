import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {addItem} from "../Handlers/handlers";
import './Header.css';

export default function Header(props) {
  const {setQuests} = props;
  const [label, setLabel] = useState('');

  Header.defaultProps = {
    setQuests: () => {
    },
  };

  Header.propTypes = {
    setQuests: PropTypes.func,
  }

  const addTodoItem = (title) => addItem(title, setQuests);

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
};

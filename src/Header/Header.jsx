import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  const {addItem} = props;
  const [label, setLabel] = useState('');

  Header.defaultProps = {
    addItem: () => {
    },
  };

  Header.propTypes = {
    addItem: PropTypes.func,
  }

  const onLabelChange = (ev) => setLabel(ev.target.value);

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          addItem(label);
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

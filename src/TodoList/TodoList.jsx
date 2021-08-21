import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

export default function TodoList({quests, setQuests}) {

  const [isEditing, setIsEditing] = useState(false);

  TodoList.propTypes = {
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    setQuests: PropTypes.func.isRequired,
  };

  return (
    <ul className="todo-list">
      {quests.map((elem) => (
        <TodoListItem
          key={elem.id}
          quest={elem}
          quests={quests}
          setQuests={setQuests}
          isEditing={isEditing}
          setIsEditing={setIsEditing}/>
      ))}
    </ul>
  );
};

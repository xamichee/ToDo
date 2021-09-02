import React, {useState} from 'react';

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';
import {todos} from '../InitialState/initialState';

export default function App() {
  const [quests, setQuests] = useState(todos);
  const [activeFilter, setActiveFilter] = useState("All");
  const [editingValue, setEditingValue] = useState('');

  const questsToRender = quests.filter((elem) => {
    switch (activeFilter) {
      case 'Completed': return (elem.done)
      case 'Active': return (!elem.done)
      default: return true;
    }
  });

  return (
    <section className="todoapp">
      <Header setQuests={setQuests}/>
      <section className="main">
        <TodoList
          quests={questsToRender}
          setQuests={setQuests}
          editingValue={editingValue}
          setEditingValue={setEditingValue}
        />
        <Footer
          setActiveFilter={setActiveFilter}
          setQuests={setQuests}
          quests={quests}
          editingValue={editingValue}
          setEditingValue={setEditingValue}
        />
      </section>
    </section>
  );
};

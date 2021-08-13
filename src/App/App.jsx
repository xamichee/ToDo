import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';
import initialState from './initialState';
import {onCheck, addItem, deleteItem, editItem, onEditSubmit, onFilter} from "./api";

export default function App() {
  const [quests, setQuests] = useState(initialState.quests);
  const [filters, setFilters] = useState(initialState.filters);
  const [activeFilter, setActiveFilter] = useState(initialState.activeFilter);

  useEffect(() => {
    setQuests((Quest) => Quest.map((elem) => ({
        ...elem,
        created: formatDistanceToNow(elem.date, {addSuffix: true, includeSeconds: true})
      }))
    );

    const interval = setInterval(() => {
      setQuests((Quest) => Quest.map((elem) => ({
          ...elem,
          created: formatDistanceToNow(elem.date, {addSuffix: true, includeSeconds: true})
        }))
      )
    }, 5000);

    return () => clearInterval(interval);
  }, [])

  const onCheckClick = (id) => onCheck(id, quests, setQuests);

  const addTodoItem = (title) => addItem(title, setQuests);

  const deleteTodoItem = (id) => deleteItem(id, setQuests);

  const editTodoItem = (id) => editItem(id, setQuests);

  const onEditItemSubmit = (id, value) => onEditSubmit(id, value, setQuests)

  const onItemsFilter = (event) => onFilter(event, setActiveFilter, setFilters);

  const onClearComplete = () => {
    setQuests(Quests => Quests.filter((elem) => !elem.done))
  };

  const left = quests.filter((elem) => !elem.done).length;

  const questsToRender = quests.map((elem) => {
    switch (activeFilter) {
      case 'All':
        return {...elem, className: ''};
      case 'Completed':
        if (!elem.done) return {...elem, className: 'hidden'};
        return {...elem, className: ''};
      case 'Active':
        if (elem.done) return {...elem, className: 'hidden'};
        return {...elem, className: ''};
      default:
        return null;
    }
  });

  return (
    <section className="todoapp">
      <Header addItem={addTodoItem}/>
      <section className="main">
        <TodoList
          quests={questsToRender}
          onDelete={deleteTodoItem}
          onEdit={editTodoItem}
          onCheckClick={onCheckClick}
          onEditSubmit={onEditItemSubmit}
        />
        <Footer onFilter={onItemsFilter} onClearComplete={onClearComplete} left={left} filters={filters}/>
      </section>
    </section>
  )
};
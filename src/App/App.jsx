import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';
import {todos, filtersList} from '../InitialState/initialState';
import {onCheck, deleteItem, editItem, onEditSubmit, onFilter} from "../Handlers/handlers";

export default function App() {
  const [quests, setQuests] = useState(todos);
  const [filters, setFilters] = useState(filtersList);
  const [activeFilter, setActiveFilter] = useState("All");

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

  const deleteTodoItem = (id) => deleteItem(id, setQuests);

  const editTodoItem = (id) => editItem(id, setQuests);

  const onEditItemSubmit = (id, value) => onEditSubmit(id, value, setQuests)

  const onItemsFilter = (event) => onFilter(event, setActiveFilter, setFilters);

  const onClearComplete = () => {
    setQuests(Quests => Quests.filter((elem) => !elem.done))
  };

  const left = quests.filter((elem) => !elem.done).length;

  const questsToRender = (activeFilter === 'All') ? quests : quests.map((elem) => {
    switch (activeFilter) {
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
      <Header setQuests={setQuests}/>
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

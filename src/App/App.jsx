import React, { Component } from 'react';

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';

export default class App extends Component {
  maxId = 5;

  state = {
    quests: [
      { id: 1, done: false, title: 'Заработать денег', className: '', date: new Date(2021, 5, 6) },
      { id: 2, done: false, title: 'Заплатить налоги', className: '', date: new Date(2021, 5, 12) },
      { id: 3, done: false, title: 'Спать спокойно', className: '', date: Date.now() },
    ],

    filters: [
      { id: 1, name: 'All', className: 'selected' },
      { id: 2, name: 'Active', className: '' },
      { id: 3, name: 'Completed', className: '' },
    ],
  };

  onCheckClick = (id) => {
    const { quests } = this.state;
    const idx = quests.findIndex((el) => el.id === id);
    const newItem = { ...quests[idx], done: !quests[idx].done };
    this.setState(() => ({
      quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
    }));
  };

  createItem = (title) => {
    this.maxId += 1;
    return {
      id: this.maxId,
      done: false,
      title,
      className: '',
      date: Date.now(),
    };
  };

  addItem = (title) => {
    const newItem = this.createItem(title);
    this.setState(({ quests }) => ({
      quests: [newItem, ...quests],
    }));
  };

  deleteItem = (id) => {
    this.setState(({ quests }) => {
      const idx = quests.findIndex((el) => el.id === id);
      return {
        quests: [...quests.slice(0, idx), ...quests.slice(idx + 1)],
      };
    });
  };

  editItem = (id) => {
    this.setState(({ quests }) => {
      const idx = quests.findIndex((el) => el.id === id);
      const newItem = { ...quests[idx], className: 'editing' };

      return {
        quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
      };
    });
  };

  onEditSubmit = (id, value) => {
    this.setState(({ quests }) => {
      const idx = quests.findIndex((el) => el.id === id);
      if (value) {
        const newItem = { ...quests[idx], title: value, className: '' };
        return {
          quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
        };
      }
      const oldItem = { ...quests[idx], className: '' };
      return {
        quests: [...quests.slice(0, idx), oldItem, ...quests.slice(idx + 1)],
      };
    });
  };

  onFilter = (event) => {
    this.setState(({ quests, filters }) => ({
      quests: quests.map((elem) => {
        switch (event.target.textContent) {
          case 'All':
            return { ...elem, className: '' };
          case 'Completed':
            if (!elem.done) return { ...elem, className: 'hidden' };
            return { ...elem, className: '' };
          case 'Active':
            if (elem.done) return { ...elem, className: 'hidden' };
            return { ...elem, className: '' };
          default:
            return null;
        }
      }),
      filters: filters.map((elem) =>
        event.target.textContent === elem.name ? { ...elem, className: 'selected' } : { ...elem, className: '' }
      ),
    }));
  };

  onClearComplete = () => {
    this.setState(({ quests }) => ({
      quests: quests.filter((elem) => !elem.done),
    }));
  };

  render() {
    const { quests, filters } = this.state;
    const left = quests.filter((elem) => !elem.done).length;

    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <TodoList
            quests={quests}
            onDelete={this.deleteItem}
            onEdit={this.editItem}
            onCheckClick={this.onCheckClick}
            onEditSubmit={this.onEditSubmit}
          />
          <Footer onFilter={this.onFilter} onClearComplete={this.onClearComplete} left={left} filters={filters} />
        </section>
      </section>
    );
  }
}

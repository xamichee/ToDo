import React, { Component } from 'react';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';
import initialState from './initialState'


export default class App extends Component {
  maxId = 5;

  interval = null;

  state = initialState;

  componentDidMount() {
    this.setState(({quests}) => ({
      quests: quests.map( (elem) => ({...elem, created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true })}
      ))
    }));

    this.interval = setInterval(() => {
      this.setState(({quests}) => ({
        quests: quests.map( (elem) => ({...elem, created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true })}
        ))
      }))
    }, 5000)
  }

  componentDidUpdate() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState(({quests}) => ({
        quests: quests.map( (elem) => ({...elem, created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true })}
        ))
      }))
    }, 5000)
  }

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
      className: "",
      date: Date.now(),
      created: formatDistanceToNow(Date.now(), { addSuffix: true, includeSeconds: true }),
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
      const newItem = { ...quests[idx], className: "editing" };

      return {
        quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
      };
    });
  };

  onEditSubmit = (id, value) => {
    this.setState(({ quests }) => {
      const idx = quests.findIndex((el) => el.id === id);
      if (value) {
        const newItem = { ...quests[idx], title: value, className: "" };
        return {
          quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
        };
      }
      const oldItem = { ...quests[idx], className: "" };
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
            return { ...elem, className: "" };
          case 'Completed':
            if (!elem.done) return { ...elem, className: "hidden" };
            return { ...elem, className: '' };
          case 'Active':
            if (elem.done) return { ...elem, className: "hidden" };
            return { ...elem, className: '' };
          default:
            return null;
        }
      }),
      filters: filters.map((elem) =>
        event.target.textContent === elem.name ? { ...elem, className: "selected" } : { ...elem, className: "" }
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

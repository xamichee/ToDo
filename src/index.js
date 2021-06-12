import React from "react";
import ReactDom from 'react-dom';

import './style.css';

import Header from "./header";
import TodoList from "./todo-list";
import Footer from "./footer";

const quests = [
  { id: '1', done: true, title: 'Completed task', className: 'completed'},
  { id: '2', done: false, title: 'Editing task', className: 'editing'},
  { id: '3', done: false, title: 'Active task', className: ''},
]

const App = () => {
  return (
    <section className='todoapp'>
      <Header />
      <section className='main'>
        <TodoList quests={quests} />
        <Footer />
      </section>
    </section>
    )
}

ReactDom.render(<App />, document.getElementById('root'));
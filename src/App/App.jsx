import React from 'react';

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';

export default function App() {
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TodoList />
        <Footer />
      </section>
    </section>
  );
}

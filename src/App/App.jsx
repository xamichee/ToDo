import React from 'react';
import { connect } from "react-redux";

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';

function App() {

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

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(App);
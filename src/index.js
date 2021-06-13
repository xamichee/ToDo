import React, {Component} from "react";
import ReactDom from 'react-dom';

import './style.css';

import Header from "./header";
import TodoList from "./todo-list";
import Footer from "./footer";

class App extends Component {

  state = {
    quests: [
      { id: '1', done: true, title: 'Completed task', className: ''},
      { id: '2', done: false, title: 'Editing task', className: 'editing'},
      { id: '3', done: false, title: 'Active task', className: ''},
    ]
  }

  deleteItem = (id) => {
    this.setState(({quests}) => {
      const idx = quests.findIndex((el) => el.id === id);

      return {
        quests: [...quests.slice(0, idx), ...quests.slice(idx + 1)]
      }
    })
  };

  render() {
    return (
      <section className='todoapp'>
        <Header />
        <section className='main'>
          <TodoList
            quests={this.state.quests}
            onDelete={this.deleteItem}/>
          <Footer />
        </section>
      </section>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
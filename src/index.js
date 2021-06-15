import React, {Component} from "react";
import ReactDom from 'react-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './style.css';

import Header from "./header";
import TodoList from "./todo-list";
import Footer from "./footer";

class App extends Component {

  maxId = 5;

  state = {
    quests: [
      {id: 1, done: false, title: 'Заработать денег', className: '', date: `${formatDistanceToNow(new Date(2021, 5, 6))}`,},
      {id: 2, done: false, title: 'Заплатить налоги', className: '', date: `${formatDistanceToNow(new Date(2021, 5, 12))}`,},
      {id: 3, done: false, title: 'Спать спокойно', className: '', date: `${formatDistanceToNow(Date.now())}`,},
    ]
  }

  onCheckClick = (id) => {
    const idx = this.state.quests.findIndex((el) => el.id === id);
    const newItem = Object.assign({}, this.state.quests[idx]);
    newItem.done = !newItem.done;
    this.setState(({quests}) => {
      return {
        quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)]
      }
    });
  }

  createItem = (title, className = '') => {
    return {
      id: this.maxId++,
      done: false,
      title: title,
      className: className,
      date: formatDistanceToNow(Date.now())
    };
  }

  addItem = (title, className) => {
    const newItem = this.createItem(title, className);
    this.setState(({quests}) => {
      return {
        quests: [newItem, ...quests]
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({quests}) => {
      const idx = quests.findIndex((el) => el.id === id);
      return {
        quests: [...quests.slice(0, idx), ...quests.slice(idx + 1)]
      }
    })
  };

  editItem = (id) => {

    this.setState(({quests}) => {

      const idx = quests.findIndex((el) => el.id === id);
      const title = quests[idx].title;
      const newItem = this.createItem(title, 'editing');

      return {
        quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)]
      }
    })
  }

  // onFilter = (e) => {
  //   let all = [...this.state.quests];
  //   console.log(all);
  //   this.setState(({quests}) => {
  //     switch (e.target.textContent) {
  //       case 'All': if (all) return {
  //           quests: [...all]
  //       }
  //       case 'Completed': return {
  //         quests: quests.filter(elem => elem.done)
  //       }
  //       case 'Active': return {
  //         quests: quests.filter(elem => !elem.done)
  //       }
  //     }
  //
  //   })
  //
  // }

  render() {
    return (
      <section className='todoapp'>
        <Header addItem={this.addItem}/>
        <section className='main'>
          <TodoList
            quests={this.state.quests}
            onDelete={this.deleteItem}
            onEdit={this.editItem}
            onCheckClick={this.onCheckClick}
            />
          <Footer />
        </section>
      </section>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
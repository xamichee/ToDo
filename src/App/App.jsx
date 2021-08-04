import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './App.css';
import initialState from './initialState';

function App() {
  const [quests, setQuests] = useState(initialState.quests);
  const [filters,setFilters] = useState(initialState.filters);

  let maxId = 5;

  useEffect(() => {
    setQuests((Quest) => Quest.map((elem) => ({ ...elem,
        created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true })
      }))
    );

    const interval = setInterval(() => {
      setQuests((Quest) => Quest.map((elem) => ({ ...elem,
          created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true })
        }))
      )
    }, 5000);

    return () => clearInterval(interval);
  }, [ ])

  const onCheckClick = (id) => {
    const idx = quests.findIndex((el) => el.id === id);
    const newItem = { ...quests[idx], done: !quests[idx].done };
    setQuests((Quest) => [...Quest.slice(0, idx), newItem, ...Quest.slice(idx + 1)]);
  };

  const createItem = (title) => {
    maxId += 1;
    return {
      id: maxId,
      done: false,
      title,
      className: '',
      date: Date.now(),
      created: formatDistanceToNow(Date.now(), { addSuffix: true, includeSeconds: true }),
    };
  };

  const addItem = (title) => {
    const newItem = createItem(title);
    setQuests((Quest) => [newItem, ...Quest]);
  };

  const deleteItem = (id) => {
    setQuests(qsts => {
      const idx = qsts.findIndex((el) => el.id === id);
      return [...qsts.slice(0, idx), ...qsts.slice(idx + 1)]
    });
  };

  const editItem = (id) => {
    setQuests(Quest => {
      const idx = Quest.findIndex((el) => el.id === id);
      const newItem = { ...Quest[idx], className: 'editing' };

      return [...Quest.slice(0, idx), newItem, ...Quest.slice(idx + 1)]
    });
  };

  const onEditSubmit = (id, value) => {
    setQuests(Quest => {
      const idx = Quest.findIndex((el) => el.id === id);
      if (value) {
        const newItem = { ...Quest[idx], title: value, className: '' };
        return  [...Quest.slice(0, idx), newItem, ...Quest.slice(idx + 1)]
      }
      const oldItem = { ...Quest[idx], className: '' };
      return [...Quest.slice(0, idx), oldItem, ...Quest.slice(idx + 1)]
    });
  };

  const onFilter = (event) => {
    setQuests(Quests => (
      Quests.map((elem) => {
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
    })));

    setFilters(Filters => Filters.map((elem) =>
        event.target.textContent === elem.name ? { ...elem, className: 'selected' } : { ...elem, className: '' })
    );
  };

  const onClearComplete = () => { setQuests(Quests => Quests.filter((elem) => !elem.done)) };

  const left = quests.filter((elem) => !elem.done).length;

  return (
    <section className="todoapp">
      <Header addItem={addItem} />
      <section className="main">
        <TodoList
          quests={quests}
          onDelete={deleteItem}
          onEdit={editItem}
          onCheckClick={onCheckClick}
          onEditSubmit={onEditSubmit}
        />
        <Footer onFilter={onFilter} onClearComplete={onClearComplete} left={left} filters={filters} />
      </section>
    </section>
  )
}

// export default class App extends Component {
//   maxId = 5;
//   interval = null;
//
//   state = initialState;
//
//
//   // componentDidMount() {
//   //   this.setState(({ quests }) => ({
//   //     quests: quests.map((elem) => ({
//   //       ...elem,
//   //       created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true }),
//   //     })),
//   //   }));
//   //
//   //   this.interval = setInterval(() => {
//   //     this.setState(({ quests }) => ({
//   //       quests: quests.map((elem) => ({
//   //         ...elem,
//   //         created: formatDistanceToNow(elem.date, { addSuffix: true, includeSeconds: true }),
//   //       })),
//   //     }));
//   //   }, 5000);
//   // }
//
//   // componentWillUnmount() {
//   //   clearInterval(this.interval);
//   // }
//
//   onCheckClick = (id) => {
//     const { quests } = this.state;
//     const idx = quests.findIndex((el) => el.id === id);
//     const newItem = { ...quests[idx], done: !quests[idx].done };
//     this.setState(() => ({
//       quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
//     }));
//   };
//
//   createItem = (title) => {
//     this.maxId += 1;
//     return {
//       id: this.maxId,
//       done: false,
//       title,
//       className: '',
//       date: Date.now(),
//       created: formatDistanceToNow(Date.now(), { addSuffix: true, includeSeconds: true }),
//     };
//   };
//
//   addItem = (title) => {
//     const newItem = this.createItem(title);
//     this.setState(({ quests }) => ({
//       quests: [newItem, ...quests],
//     }));
//   };
//
//   deleteItem = (id) => {
//     this.setState(({ quests }) => {
//       const idx = quests.findIndex((el) => el.id === id);
//       return {
//         quests: [...quests.slice(0, idx), ...quests.slice(idx + 1)],
//       };
//     });
//   };
//
//   editItem = (id) => {
//     this.setState(({ quests }) => {
//       const idx = quests.findIndex((el) => el.id === id);
//       const newItem = { ...quests[idx], className: 'editing' };
//
//       return {
//         quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
//       };
//     });
//   };
//
//   onEditSubmit = (id, value) => {
//     this.setState(({ quests }) => {
//       const idx = quests.findIndex((el) => el.id === id);
//       if (value) {
//         const newItem = { ...quests[idx], title: value, className: '' };
//         return {
//           quests: [...quests.slice(0, idx), newItem, ...quests.slice(idx + 1)],
//         };
//       }
//       const oldItem = { ...quests[idx], className: '' };
//       return {
//         quests: [...quests.slice(0, idx), oldItem, ...quests.slice(idx + 1)],
//       };
//     });
//   };
//
//   onFilter = (event) => {
//     this.setState(({ quests, filters }) => ({
//       quests: quests.map((elem) => {
//         switch (event.target.textContent) {
//           case 'All':
//             return { ...elem, className: '' };
//           case 'Completed':
//             if (!elem.done) return { ...elem, className: 'hidden' };
//             return { ...elem, className: '' };
//           case 'Active':
//             if (elem.done) return { ...elem, className: 'hidden' };
//             return { ...elem, className: '' };
//           default:
//             return null;
//         }
//       }),
//       filters: filters.map((elem) =>
//         event.target.textContent === elem.name ? { ...elem, className: 'selected' } : { ...elem, className: '' }
//       ),
//     }));
//   };
//
//   onClearComplete = () => {
//     this.setState(({ quests }) => ({
//       quests: quests.filter((elem) => !elem.done),
//     }));
//   };
//
//   render() {
//     const { quests, filters } = this.state;
//     const left = quests.filter((elem) => !elem.done).length;
//
//     return (
//       <section className="todoapp">
//         <Header addItem={this.addItem} />
//         <section className="main">
//           <TodoList
//             quests={quests}
//             onDelete={this.deleteItem}
//             onEdit={this.editItem}
//             onCheckClick={this.onCheckClick}
//             onEditSubmit={this.onEditSubmit}
//           />
//           <Footer onFilter={this.onFilter} onClearComplete={this.onClearComplete} left={left} filters={filters} />
//         </section>
//       </section>
//     );
//   }
// }

export default App;
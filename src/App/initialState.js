const initialState = {
  quests: [
    { id: 1, done: false, title: 'Пункт 1', className: '', date: Date.now(), created: null },
    { id: 2, done: false, title: 'Пункт 2', className: '', date: Date.now(), created: null },
    { id: 3, done: false, title: 'Пункт 3', className: '', date: Date.now(), created: null },
  ],

  filters: [
    { id: 1, name: 'All', className: 'selected' },
    { id: 2, name: 'Active', className: '' },
    { id: 3, name: 'Completed', className: '' },
  ],

  activeFilter: 'All'
};

export default initialState;
const initialState = {
  quests: [
    { id: 1, done: false, title: 'Заработать денег', className: '', date: Date.now(), created: null },
    { id: 2, done: false, title: 'Заплатить налоги', className: '', date: Date.now(), created: null },
    { id: 3, done: false, title: 'Спать спокойно', className: '', date: Date.now(), created: null },
  ],

  filters: [
    { id: 1, name: 'All', className: 'selected' },
    { id: 2, name: 'Active', className: '' },
    { id: 3, name: 'Completed', className: '' },
  ],
};

export default initialState;
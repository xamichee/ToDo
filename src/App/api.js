import formatDistanceToNow from "date-fns/formatDistanceToNow";

let maxId = 5;

const createItem = (title) => {
  maxId += 1;
  return {
    id: maxId,
    done: false,
    title,
    className: '',
    date: Date.now(),
    created: formatDistanceToNow(Date.now(), {addSuffix: true, includeSeconds: true}),
  }
};

export function addItem(title, callback) {
  const newItem = createItem(title);
  callback((Quest) => [newItem, ...Quest]);
}

export function onCheck(id, array, callback) {
  const idx = array.findIndex((el) => el.id === id);
  const newItem = { ...array[idx], done: !array[idx].done };
  callback((Quest) => [...Quest.slice(0, idx), newItem, ...Quest.slice(idx + 1)]);
}

export function deleteItem(id, callback) {
  callback(qsts => {
    const idx = qsts.findIndex((el) => el.id === id);
    return [...qsts.slice(0, idx), ...qsts.slice(idx + 1)]
  });
}

export function editItem (id, callback)  {
  callback(Quest => {
    const idx = Quest.findIndex((el) => el.id === id);
    const newItem = { ...Quest[idx], className: 'editing' };

    return [...Quest.slice(0, idx), newItem, ...Quest.slice(idx + 1)]
  });
}

export function onEditSubmit (id, value, callback) {
  callback(Quest => {
    const idx = Quest.findIndex((el) => el.id === id);
    if (value) {
      const newItem = { ...Quest[idx], title: value, className: '' };
      return  [...Quest.slice(0, idx), newItem, ...Quest.slice(idx + 1)]
    }
    const oldItem = { ...Quest[idx], className: '' };
    return [...Quest.slice(0, idx), oldItem, ...Quest.slice(idx + 1)]
  });
}

export function onFilter (event, callback1, callback2) {
  callback1(Quests => (
    Quests.map((elem) => {
      switch (event.target.textContent) {
        case 'All':
          return {...elem, className: ''};
        case 'Completed':
          if (!elem.done) return {...elem, className: 'hidden'};
          return {...elem, className: ''};
        case 'Active':
          if (elem.done) return {...elem, className: 'hidden'};
          return {...elem, className: ''};
        default:
          return null;
      }
    })))

  callback2(Filters => Filters.map((elem) =>
    event.target.textContent === elem.name ? { ...elem, className: 'selected' } : { ...elem, className: '' })
  );
}
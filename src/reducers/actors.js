const initialActors = {
  listName: 'Best',
  list: ['Cezary Pazura', 'Sylwester Stalone', 'Nicolas Cage'],
};

function actors(state = initialActors, action) {
  switch (action.type) {
    case 'ADD_ACTOR':
      return {
        ...state,
        list: [...state.list, action.actor],
      };
    case 'REMOVE_LAST_ACTOR':
      const actors = [...state.list];
      actors.pop();
      return {
        ...state,
        list: actors,
      };
    default:
      return state;
  }
}

export default actors;

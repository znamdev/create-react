const add = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie,
  };
};

const removeLast = () => {
  return {
    type: 'REMOVE_LAST_MOVIE',
  };
};

const reset = () => {
  return {
    type: 'RESET_MOVIES',
  };
};

const toggle = (id) => {
  return {
    type: 'TOGGLE_MOVIE',
    id,
  };
};

export const actionsMovies = { add, removeLast, reset, toggle };

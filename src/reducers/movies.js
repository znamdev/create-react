const initialMovies = {
  listName: 'Favorites',
  list: [],
};

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        list: [...state.list, action.movie],
      };
    case 'REMOVE_LAST_MOVIE':
      const movies = [...state.list];
      movies.pop();
      return {
        ...state,
        list: movies,
      };
    case 'TOGGLE_MOVIE':
      const id = parseInt(action.id);
      return {
        ...state,
        list: state.list.map((movie) =>
          id === movie.id ? { ...movie, watched: !movie.watched } : movie
        ),
      };
    case 'RESET_MOVIES':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
}

export default movies;

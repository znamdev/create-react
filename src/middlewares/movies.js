import { actionsMovies } from '../actions';
const { add } = actionsMovies;

const fetchMovies = async () => {
  try {
    const response = await fetch('http://localhost:4000/movies');
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getMovies = () => {
  return async (dispatch) => {
    const movies = await fetchMovies();
    movies.forEach((movie) => dispatch(add(movie)));
  };
};

export default getMovies;

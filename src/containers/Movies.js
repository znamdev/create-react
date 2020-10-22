import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMovies from '../middlewares/movies';
import { actionsMovies } from '../actions/movies';

const Movies = () => {
  const dispatch = useDispatch([]);

  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleClick = (e) => {
    const id = parseInt(e.target.id);
    dispatch(actionsMovies.toggle(id));
  };

  return (
    <>
      <h3>Zaplanowane</h3>
      <ul>
        {movies.list.map((movie) =>
          !movie.watched ? (
            <li id={movie.id} onClick={handleClick} key={movie.id}>
              {movie.title}
            </li>
          ) : null
        )}
      </ul>
      <h3>Obejrzane</h3>
      <ul>
        {movies.list.map((movie) =>
          movie.watched ? (
            <li id={movie.id} onClick={handleClick} key={movie.id}>
              {movie.title}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default Movies;

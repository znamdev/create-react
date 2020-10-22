import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { actionsMovies } from '../actions';

const MoviesForm = ({ add }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    add(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>Dodaj Film</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  add: (movie) => dispatch(actionsMovies.add(movie)),
});

export default connect(null, mapDispatchToProps)(MoviesForm);

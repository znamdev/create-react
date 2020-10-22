import React from 'react';
import './App.css';
import Movies from './containers/Movies';
import MoviesForm from './containers/MoviesForm';

function App() {
  return (
    <div className='App'>
      <MoviesForm />
      <Movies />
    </div>
  );
}

export default App;

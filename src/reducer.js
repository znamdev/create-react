import { combineReducers } from 'redux';
import { actors, movies } from './reducers';

export const allReducers = combineReducers({
  movies,
  actors,
});

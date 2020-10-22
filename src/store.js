import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

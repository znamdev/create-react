import { bindActionCreators } from 'redux';
import { store } from '../store';

const add = (actor) => {
  return {
    type: 'ADD_ACTOR',
    actor,
  };
};

const removeLast = () => {
  return {
    type: 'REMOVE_LAST_ACTOR',
  };
};

export const actionsActors = bindActionCreators(
  { add, removeLast },
  store.dispatch
);

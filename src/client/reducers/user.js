import { ADD_USER, DELETE_USER } from '../actions/types';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return state;
    case DELETE_USER:
      return state;
    default:
      return state;
  }
}

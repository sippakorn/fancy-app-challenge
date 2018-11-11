import { ADD_USER, DELETE_USER, UPDATE_FIELD_AUTH } from '../actions/types';

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    case DELETE_USER:
      return state;
    default:
      return state;
  }
}

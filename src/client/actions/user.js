import { ADD_USER, DELETE_USER } from './types';

export const createUser = ({ email, password }) => ({
  type: ADD_USER,
  payload: {
    email,
    password
  }
});

export const deleteUser = ({ email, password }) => ({
  type: DELETE_USER,
  payload: {
    email,
    password
  }
});

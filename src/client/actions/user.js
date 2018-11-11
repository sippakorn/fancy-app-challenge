import { ADD_USER, DELETE_USER } from './types';
import agent from '../agent';

export const createUser = ({ email, password }) => {
  const newUser = agent.Auth.register(email, password);
  return {
    type: ADD_USER,
    payload: {
      user: newUser
    }
  };
};

export const deleteUser = ({ email, password }) => ({
  type: DELETE_USER,
  payload: {
    email,
    password
  }
});

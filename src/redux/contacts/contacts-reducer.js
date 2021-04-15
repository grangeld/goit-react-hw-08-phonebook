// import { combineReducers } from 'redux';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './contacts-actions';

const items = createReducer([], {
  [actionTypes.getContactSuccess]: (state, action) => action.payload,
  [actionTypes.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [actionTypes.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actionTypes.addContact]: (state, { payload }) => [...state, payload],
});

const filter = createReducer('', {
  [actionTypes.filter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

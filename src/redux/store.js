import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import user from './user/reducer';
// import todosReducer from './todos/todos-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export default store;

import axios from 'axios';

import {
  getContactRequest,
  getContactSuccess,
  getContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchPhoneList = () => dispatch => {
  dispatch(getContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error)));
};

const fetchDeleteById = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

const fetchAddContact = obj => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', obj)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchPhoneList,
  fetchDeleteById,
  fetchAddContact,
};

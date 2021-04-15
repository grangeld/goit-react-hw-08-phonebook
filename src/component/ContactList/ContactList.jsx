import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import s from './contactList.module.css';
import { getContacts, getFilter } from '../../redux/contacts/contacts-selector';
import contactOperation from '../../redux/contacts/contacts-operations';

const ContactList = () => {
  const phoneList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperation.fetchPhoneList());
  }, [dispatch]);

  //Поиск по имени
  const searchByName = ({ name }) => {
    if (name.toUpperCase().indexOf(filter.toUpperCase()) === -1) return false;
    return true;
  };

  return (
    <ul>
      {phoneList.filter(searchByName).map(data => (
        <li className={s.list} key={data.id}>
          <div>{data.name}:</div> {data.number}
          <button
            className={s.button}
            onClick={() => {
              dispatch(contactOperation.fetchDeleteById(data.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

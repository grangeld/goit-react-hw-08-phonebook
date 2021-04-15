import s from './registras.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import contactOperation from '../../redux/contacts/contacts-operations';
import { registration } from '../../redux/user/operations';

const Registration = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(registration({ name: login, email, password }));
  };

  return (
    <>
      <h1 className={s.heading}>Registration</h1>
      <form onSubmit={handleSubmit} className={s.decor}>
        <label className={s.label}>
          Login
          <input
            type="text"
            name="name"
            onChange={e => setLogin(e.target.value)}
            value={login}
            required
          />
        </label>

        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <input type="submit" value="Sign Up" className={s.buttonSubmit} />
      </form>
    </>
  );
};

export default Registration;

import s from './login.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/operations';
// import { useDispatch } from 'react-redux';
// import contactOperation from '../../redux/contacts/contacts-operations';

const Login = () => {
  const dispatch = useDispatch();
  // const phoneList = useSelector(state => state.user.token);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <>
      <h1 className={s.heading}>LogIn</h1>
      <form onSubmit={handleSubmit} className={s.decor}>
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
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

        <input type="submit" value="Login" className={s.buttonSubmit} />
      </form>
    </>
  );
};

export default Login;

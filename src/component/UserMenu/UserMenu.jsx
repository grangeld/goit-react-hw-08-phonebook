import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import LogoutButton from '../Logout';
import s from './userMenu.module.css';
import { getCurrenUser } from '../../redux/user/operations';

const UserMenu = () => {
  const email = useSelector(state => state.user.user.email);
  const dispatch = useDispatch();
  dispatch(getCurrenUser());

  return (
    <div className={s.menu}>
      <span className={s.email}>{email}</span>
      <LogoutButton />
    </div>
  );
};

export default UserMenu;

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import LogoutButton from '../Logout';
import UserMenu from '../UserMenu';

export default function Navigation() {
  const isLoginIn = useSelector(state => state.user.token);
  return (
    <nav>
      {isLoginIn && (
        <>
          <NavLink
            exact
            to="/contacts"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Phone
          </NavLink>
          <UserMenu />
        </>
      )}
      {!isLoginIn && (
        <>
          <NavLink
            to="/register"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Registration
          </NavLink>

          <NavLink
            to="/login"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}

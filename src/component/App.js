import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './app.module.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import AppBar from './AppBar';
import Container from './Container';
import { getCurrenUser } from '../redux/user/operations';
import { SetUserToken } from '../redux/user/actions';

// import Login from './Login';
// import Registras from './Registras';

const Login = lazy(() => import('./Login' /* webpackChunkName: "Login" */));
const Registration = lazy(() =>
  import('./Registras' /* webpackChunkName: "Registras" */),
);
// const Login = lazy(() => import('./Login' /* webpackChunkName: "Login" */));

function App() {
  const dispatch = useDispatch();
  const isLoginIn = useSelector(state => state.user.token);

  useEffect(() => {
    dispatch(SetUserToken(localStorage.getItem('userToken')));
    // dispatch(getCurrenUser());
  }, []);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<p>Идет загрузка...</p>}>
          <Switch>
            {isLoginIn && (
              <Route path="/contacts" exact>
                <h1 className={s.heading}>Phonebook</h1>
                <ContactForm />
                <div className={s.contact}>
                  <h2>Contacts</h2>
                  <Filter />
                  <ContactList />
                </div>
              </Route>
            )}

            {!isLoginIn && (
              <Route path="/register" exact>
                <Registration />
              </Route>
            )}

            {!isLoginIn && (
              <Route path="/login" exact>
                <Login />
              </Route>
            )}
            {isLoginIn ? (
              <Redirect to="/contacts" />
            ) : (
              <Redirect to="/register" />
            )}
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;

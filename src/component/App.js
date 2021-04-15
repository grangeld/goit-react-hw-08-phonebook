import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './app.module.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import AppBar from './AppBar';
import Container from './Container';
import { SetUserToken } from '../redux/user/actions';

const Login = lazy(() => import('./Login' /* webpackChunkName: "Login" */));
const Registration = lazy(() =>
  import('./Registras' /* webpackChunkName: "Registras" */),
);

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

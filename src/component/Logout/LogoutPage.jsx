import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/operations';

const LogoutPage = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default LogoutPage;

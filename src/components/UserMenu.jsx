import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../redux/auth/authSelectors';
import { logoutUser } from '../redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="user-menu">
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  );
};

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { UserMenu } from './UserMenu';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="navbar">
      <NavLink to="/goit-react-hw-08-phonebook">Home</NavLink>
      {!isLoggedIn && (
        <NavLink to="/goit-react-hw-08-phonebook/login">Log In</NavLink>
      )}
      {!isLoggedIn && (
        <NavLink to="/goit-react-hw-08-phonebook/register">Sign Un</NavLink>
      )}

      {isLoggedIn && (
        <NavLink to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink>
      )}
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};

export default Navbar;

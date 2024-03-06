import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to PhoneBook</h1>
      <button className="home-btn">
        <NavLink to="/goit-react-hw-08-phonebook/login"> Log In</NavLink>
      </button>
      <button className="home-btn">
        <NavLink to="/goit-react-hw-08-phonebook/register"> Sign Up</NavLink>
      </button>
    </div>
  );
};

export default Home;

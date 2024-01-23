import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(
        registerUser({ name, email, password })
      );
      if (registerUser.fulfilled.match(resultAction)) {
        navigate('/goit-react-hw-08-phonebook/contacts');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up</h1>
        <div className="inputs">
          <input
            onChange={e => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Name*"
            autoComplete="off"
          />
          <input
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email*"
            autoComplete="off"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Password*"
            autoComplete="off"
          />
        </div>
        <button type="submit">Sign Up</button>
        <div>
          {' '}
          <p className="terms">
            By signing up, you agree to our <a href="/">Terms of Use</a> and
            <a href="/"> Privacy Statement</a>
          </p>
          <p className="terms">
            Already have an account?
            <NavLink to="/goit-react-hw-08-phonebook/login"> Log In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

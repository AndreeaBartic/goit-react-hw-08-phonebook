import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth/authOperations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        navigate('/goit-react-hw-08-phonebook/contacts');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="formContainer">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputs">
          <label>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
            />
          </label>
          <label>
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password "
              name="password"
              autoComplete="off"
            />
          </label>
        </div>
        <a href="/">Forgot Password?</a>
        <button type="submit">Log in</button>
        <p>
          Don't have an account?
          <NavLink to="/goit-react-hw-08-phonebook/register"> Register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;

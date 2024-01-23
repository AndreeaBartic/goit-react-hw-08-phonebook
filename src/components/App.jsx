import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PageNotFound from 'pages/PageNotFound';
import Register from 'pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<Home />} />
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Login />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<Contacts />}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

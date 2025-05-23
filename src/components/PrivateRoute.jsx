import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { username } = useContext(UserContext);

  return username ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

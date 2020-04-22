import React from 'react';
import { Route, Link } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, ...props }) => {
  if (authenticated) {
    return <Route {...props} />
  }
  else {
    return <Link to='/'>Session Expired</Link>
  }
}

export default ProtectedRoute;
import React from 'react'
import { Outlet } from 'react-router-dom';
import Signin from '../../containers/Signin';

const ProtectedRoute = () => {

    const token = window.localStorage.getItem('token');
  return token? <Outlet /> : <Signin />
}

export default ProtectedRoute
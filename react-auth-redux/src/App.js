// import { useEffect } from "react";
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

import { authActions } from "./store/auth-slice";

// const router = 

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const storedToken = localStorage.getItem('token');
	const storedExpirationDate = localStorage.getItem('tokenExpDate');
	const remainingTime =	new Date(storedExpirationDate).getTime() - new Date().getTime();
  const dispatch = useDispatch();
  console.log(remainingTime)
  if (storedToken && (remainingTime > 60000)) {
    dispatch(authActions.login())
  }
  setTimeout(() => {
    dispatch(authActions.logout())
  }, remainingTime);
  return <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path='/auth' element={!isLoggedIn ? <AuthPage /> : <Navigate to='/' />} />
          <Route path='/profile' element={isLoggedIn ? <UserProfile /> : <Navigate to='/auth' />} />
      </Route>
    )
  )} />
}

export default App;

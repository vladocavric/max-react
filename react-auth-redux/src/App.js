import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' element={<UserProfile />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App;

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import useAuth from './hooks/useAuth';
import Loader from './components/Loader';


function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    (dispatch as any)(refreshUser());
  }, []);

  if (isRefreshing) {
    return (
      <Loader />
    )
  }
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path='/contacts' element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route path='/register' element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route path='/login' element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        /> 
      </Route>
    </Routes>
  )
}

export default App

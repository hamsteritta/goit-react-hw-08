import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PrivateRoute from "../pages/PrivateRoute";
import RestrictedRoute from "../pages/RestrictedRoute";
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ContactsPage from "../pages/ContactsPage/ContactsPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(getIsRefreshing);

 useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   
    return (      
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>        
    )
}

export default App
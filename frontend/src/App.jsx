import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
    const isLoggedIn = !!localStorage.getItem('token');

  return (
   <Routes>
    <Route path='/' element={<Navigate to="/login" />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> :<Navigate to="/login" />}></Route>
   </Routes>
  );
};

export default App;
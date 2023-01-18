import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';
import ProfileScreen from './ProfileScreen';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();


  useEffect(() => {
    const subscripbe=onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        dispatch(logout)
      }
    })
    return()=>{
      subscripbe();
    }
  }, [])

  return (
    <div className="App">
      {
        !user ? <Login /> :
          (<Routes>
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profiles" element={<ProfileScreen/>} />
            </>
          </Routes>)
      }
    </div>
  );
}

export default App;

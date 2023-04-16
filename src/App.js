import logo from './logo.svg';
import './App.css';
import DessertList from './DessertsList';
import { useContext, useEffect, useState } from 'react';
import { validateEmail } from './util';
import { UserContext, useUser } from './userContext';
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
function App() {
  const {user}  = useUser()
  console.log(user)
  return (
    <div className="App">
   acb
    </div>
  );
}

export default App;

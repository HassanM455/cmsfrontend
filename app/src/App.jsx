import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import loginImage from './assets/login-img.jpg';

function App() {
  return (
    <div className="app-login">
        <img src={loginImage} className="loginImage" alt="ocean"/>
        <LoginForm>
        </LoginForm>
    </div>
  );
}

export default App;
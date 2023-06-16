import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
  const forgotPasswordHandler = (event) => {

  }
  
  return (
    <div className="app">
      <div className="app-login">

        <header>Welcome</header>

        <LoginForm />

        <button type="submit" onClick={forgotPasswordHandler}> 
          Forgot Password
        </button>

      </div>
    </div>
  );
}

export default App;
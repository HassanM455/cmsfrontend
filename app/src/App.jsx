import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
  const forgotPasswordHandler = (event) => {

  }
  
  return (
    <div className="app-login">
        <header 
          className="app-login__welcome"
          style={{
            position: 'absolute', 
            top: '10rem'              
          }}>Welcome</header>
        <LoginForm 
          style={{ 
            position: 'absolute', 
            top: '15rem' 
          }}>
        </LoginForm>
      <button className="forgot__password" type="submit" onClick={forgotPasswordHandler}>Forgot Password</button>
    </div>
  );
}

export default App;
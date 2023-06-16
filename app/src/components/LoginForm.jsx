import {useState, useEffect} from 'react';
import './LoginForm.css';


function LoginForm(props) {

  const [inputUsername, setInputUsername] = useState('');

  const [inputPassword, setInputPassword] = useState(''); 

  const [isButtonFocus, setIsButtonFocus ] = useState(false) ;

  // Defining form input change handlers
  const onInputUsernameChange = (event) => {
    setInputUsername(event.target.value);
  };

  const onInputPasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  // Defining hook for form input change handlers

  const onInputChangeHook = (a,b) => {
    if (inputUsername !== '' || inputPassword !== '') {
      setIsButtonFocus(true);
    } else {
      setIsButtonFocus(false);
    }
  }

  useEffect(
    onInputChangeHook, 
    [inputUsername, inputPassword]
  )



  const handleMouseHover = (event) => {
    if (inputUsername || inputPassword) {
      return null; 
    }
    if(event.type === 'mouseenter') {setIsButtonFocus(true)}
    if(event.type === 'mouseleave') {setIsButtonFocus(false)}
    
  }


  return (
    <div className="loginform__container">
      <form className="loginform">
        <header>Please Login</header>

        <div className="loginform__inputs">
          <div className="loginform__inputs_container">
              <label>
                {(inputUsername || inputPassword ) && <p>Email *</p>}
              </label>
              <input 
                type="text" 
                value={inputUsername}
                onChange={onInputUsernameChange}
                placeholder="Username *"
              />
          </div>
          <div className="loginform__inputs_container">
              <label>
                {(inputUsername || inputPassword ) && <p>Password *</p>}
              </label>
              <input
                type="password" 
                placeholder="Password *"
                onChange={onInputPasswordChange}
                value={inputPassword}
              />
          </div>    
        </div>    
          
      <button 
          className="loginform" 
          type="submit"
          onMouseEnter={handleMouseHover} 
          onMouseLeave={handleMouseHover} 
          style={{ opacity: isButtonFocus ? '1.0' : '0.5' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};



export default LoginForm; 
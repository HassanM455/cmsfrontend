import {useState} from 'react';
import './LoginForm.css';


function LoginForm(props) {

	const [inputUsername, setInputUsername] = useState('');

	const [inputPassword, setInputPassword] = useState(''); 

	const [isButtonFocus, setIsButtonFocus ] = useState(false) ;

	const onInputUsernameChange = (event) => {
		setInputUsername(event.target.value);
		event.target.value ? setIsButtonFocus(true) : setIsButtonFocus(false);

	};

	const onInputPasswordChange = (event) => {
		setInputPassword(event.target.value);
		event.target.value ? setIsButtonFocus(true) : setIsButtonFocus(false);
	};



	return (
		<div className="loginform" style={props.style}>
			<header>Please Login</header>
			<form className="loginform">
					<div className="loginform__inputs_container">
					<div className="loginform__input">
						{(inputUsername || inputPassword ) && <p>Email *</p>}
					</div>
						<input 
							className="loginform"
							type="text" 
							value={inputUsername}
							onChange={onInputUsernameChange}
							placeholder="Username *"
						/>

					<div className="loginform__input">
						{(inputUsername || inputPassword ) && <p>Password *</p>}
					</div>
						<input
							className="loginform"
							type="password" 
							placeholder="Password *"
							onChange={onInputPasswordChange}
							value={inputPassword}				
						/>
					</div>
					<button 
						className="loginform" 
						type="submit"
						style={{ opacity: isButtonFocus ? '1.0' : '0.5' }}>
						Login
					</button>
			</form>
		</div>
	);
};



export default LoginForm; 
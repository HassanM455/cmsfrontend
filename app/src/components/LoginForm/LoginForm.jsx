import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
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
		<div className="loginForm" style={props.style}>
			<Form>
			<header className="form-header">
				<h1>Welcome</h1>
				<h2>Please Login</h2>
				</header>
					<div className="input-label mt-4">
						{(inputUsername || inputPassword ) && <p>Email *</p>}
					</div>
					<InputGroup className="mb-5">
						<Form.Control
						className="loginform"
						type="text" 
						value={inputUsername}
						onChange={onInputUsernameChange}
						placeholder="Username *"
						aria-label="Recipient's username"
						aria-describedby="username"
						/>
						
					</InputGroup>

					<div className="input-label">
						{(inputUsername || inputPassword ) && <p>Password *</p>}
					</div>
					
					<InputGroup className="mb-3">
						<Form.Control
						className="loginform"
						type="password" 
						placeholder="Password *"
						onChange={onInputPasswordChange}
						value={inputPassword}
						aria-label="Recipient's password"
						aria-describedby="password"
						/>
						
					</InputGroup>

					<footer>
					<Button 
						className="loginform mt-4" 
						type="submit"
						style={{ opacity: isButtonFocus ? '1.0' : '0.5' }}>
						Login
					</Button>
					<Button variant="lightc" className="forgot-password mt-3" type="submit" >Forgot Password</Button>
					</footer>
			</Form>
		</div>
	);
};



export default LoginForm; 
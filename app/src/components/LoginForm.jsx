import './LoginForm.css';


function LoginForm(props) {

	const forgotPasswordHandler = (event) => {

	}

	return (
		<div className="loginform"style={props.style}>
			<header>Please Login</header>
			<form>
				<div className="loginform">
					<input type="text" placeholder="Username *"/>
					<input type="password" placeholder="Password *"/>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};



export default LoginForm; 
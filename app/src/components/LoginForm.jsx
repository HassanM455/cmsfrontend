import './LoginForm.css';


function LoginForm(props) {

	const forgotPasswordHandler = (event) => {

	}

	return (
		<div className="loginform" style={props.style}>
			<header>Please Login</header>
			<form>
				<div className="loginform__inputs">
						<input type="text" placeholder="Username *"/>
						<input type="password" placeholder="Password *"/>
						<button type="submit"> Login </button>
				</div>
			</form>
			<button className="forgot__password" type="submit" onClick={forgotPasswordHandler}>Forgot Password</button>
		</div>
	);
};



export default LoginForm; 
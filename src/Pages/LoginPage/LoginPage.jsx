import React from 'react';
import { StyledLogin } from './LoginPage.styles';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<>
			<StyledLogin>
				<div className='box-container'>
					<form className='form'>
						<div className='form-element'>
							<label>Email</label>
							<input type='text' placeholder='Email' />
						</div>
						<div className='form-element '>
							<label>Password</label>
							<input type='password' placeholder='Password' />
						</div>
						<button className='form-element'>Sign In</button>
						<div className='form-element login-page-link'>
							<p>Don't you have an account? </p>
							<Link to='/register'>Register NOW</Link>
						</div>
					</form>
				</div>
			</StyledLogin>
		</>
	);
};

export default LoginPage;

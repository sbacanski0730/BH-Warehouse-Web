import React from 'react';
import { StyledLogin } from './LoginPage.styles';

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
						<button className='form-element'>Sign Up</button>
						{/* <div className='form-element button'>Sign Up</div> */}
						<div className='form-element login-page-link'>
							<p>Have you got account? </p>
							<span>Login NOW</span>
						</div>
					</form>
				</div>
			</StyledLogin>
		</>
	);
};

export default LoginPage;

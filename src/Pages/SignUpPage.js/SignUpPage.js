import React from 'react';
import { StyledSignUp } from './SignUpPage.style.js';
import Button from '../../components/Buttons/Button.js';

const SignUpLoginPage = () => {
	return (
		<>
			<StyledSignUp>
				<div className='box-container'>
					<form className='form'>
						<div className='email-container form-element'>
							<label>Email</label>
							<input type='text' placeholder='Email' />
						</div>
						<div className='password-container form-element '>
							<label>Password</label>
							<input type='password' placeholder='Password' />
						</div>
						<div className='repeat-password-container form-element'>
							<label>Repeat Password</label>
							<input type='password' placeholder='Repeat Password' />
						</div>
						<button className='form-element'>Sign Up</button>
					</form>
				</div>
			</StyledSignUp>
		</>
	);
};

export default SignUpLoginPage;

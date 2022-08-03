import React from 'react';
import { StyledRegisterPage } from './RegisterPage.style.js';
import { Link } from 'react-router-dom';
// import Button from '../../components/Buttons/Button.js';

const RegisterPage = () => {
	return (
		<>
			<StyledRegisterPage>
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
						<div className='form-element'>
							<label>Repeat Password</label>
							<input type='password' placeholder='Repeat Password' />
						</div>
						<button className='form-element'>Sign Up</button>
						<div className='form-element login-page-link'>
							<p>Have you got account? </p>
							<Link to='/login'>Login NOW</Link>
						</div>
					</form>
				</div>
			</StyledRegisterPage>
		</>
	);
};

export default RegisterPage;

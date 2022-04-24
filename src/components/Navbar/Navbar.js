import React from 'react';
import { StyledNavbar } from './Navbar.style.js';
import icon from '../../images/beer-outline-white.png';
import Button from '../Buttons/Button.js';

const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<div className='main-container'>
					<div className='icon-container'>
						<img src={icon} alt='Main app icon - beer glass' />
					</div>
					<div className='navbar-container'>
						<p>Home</p>
						<p>Products</p>
						<p>Add</p>
						<p>Statistics</p>
						<p>About</p>
					</div>
					<div className='login-container'>
						<Button content={'sign up'} />
					</div>
				</div>
			</StyledNavbar>
		</>
	);
};

export default Navbar;

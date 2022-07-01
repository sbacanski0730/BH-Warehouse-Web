import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.style.js';
import icon from '../../assets/beer-outline-white.png';
import Button from '../Buttons/Button.js';

const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<div className='main-container'>
					<div className='icon-container'>
						<Link to='/'>
							<img src={icon} alt='Main app icon - beer glass' />
						</Link>
					</div>
					<div className='navbar-container'>
						<ul>
							<li className='navbar-element'>Home</li>
							<li className='navbar-element'>Products</li>
							<li className='navbar-element'>Add</li>
							<li className='navbar-element'>Statistics</li>
							<li className='navbar-element'>About</li>
						</ul>
					</div>
					<div className='login-container'>
						<Button content={'sign up'} isRounded={false} />
					</div>
				</div>
			</StyledNavbar>
		</>
	);
};

export default Navbar;

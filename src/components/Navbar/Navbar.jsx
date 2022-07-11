import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.style.js';
import icon from '../../assets/beer-outline-white.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Button/Button';

const Navbar = () => {
	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
	const [activeNavbarElement, setActiveNavbarElement] = useState(1);

	const handleMobileMenuIcon = () => setIsMobileMenuActive(!isMobileMenuActive);
	const closeMobileMenu = () => setIsMobileMenuActive(false);

	const checkActiveElement = num => {
		if (activeNavbarElement === num) {
			return 'active';
		}
	};
	const handleClickOnElement = num => setActiveNavbarElement(num);

	return (
		<>
			<StyledNavbar>
				<div className='wrapper'>
					<div className='icon'>
						<Link to='/' onClick={closeMobileMenu}>
							<img src={icon} alt='Main app icon - beer glass' />
						</Link>
					</div>
					<div className='mobile-menu-container'>
						{isMobileMenuActive ? (
							<FaTimes
								id='mobile-menu-icon'
								onClick={handleMobileMenuIcon}
							/>
						) : (
							<FaBars
								id='mobile-menu-icon'
								onClick={handleMobileMenuIcon}
							/>
						)}
					</div>
					<div
						className={
							isMobileMenuActive
								? 'navbar-container active'
								: 'navbar-container '
						}
					>
						<ul>
							<li
								className={`navbar-element ${checkActiveElement(1)}`}
								onClick={() => {
									closeMobileMenu();
									handleClickOnElement(1);
								}}
							>
								<Link to='/' className='link'>
									<span>Home</span>
								</Link>
							</li>
							<li
								className={`navbar-element ${checkActiveElement(2)}`}
								onClick={() => {
									closeMobileMenu();
									handleClickOnElement(2);
								}}
							>
								<Link to='/products' className='link'>
									<span>Products</span>
								</Link>
							</li>
							<li
								className={`navbar-element ${checkActiveElement(3)}`}
								onClick={() => {
									closeMobileMenu();
									handleClickOnElement(3);
								}}
							>
								<Link to='/' className='link'>
									<span>Add</span>
								</Link>
							</li>
							<li
								className={`navbar-element ${checkActiveElement(4)}`}
								onClick={() => {
									closeMobileMenu();
									handleClickOnElement(4);
								}}
							>
								<Link to='/' className='link'>
									<span>Order List</span>
								</Link>
							</li>
							{/* Seeable only in mobile menu mode \/ */}
							<li
								className='navbar-element '
								id='logout-button'
								onClick={closeMobileMenu}
							>
								<Link to='/' className='link'>
									<Button
										btn_style={'btn-no-border'}
										btn_size={'btn-wide'}
									>
										Logout
									</Button>
								</Link>
							</li>
						</ul>
					</div>
					<div className='logout-container'>
						<Link to='/'>
							<Button>Logout</Button>
						</Link>
					</div>
				</div>
			</StyledNavbar>
		</>
	);
};

export default Navbar;

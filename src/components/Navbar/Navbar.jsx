import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.style.js';
import icon from '../../assets/beer-outline-white.png';

const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<div className='wrapper'>
					<div className='icon'>
						<Link to='/'>
							<img src={icon} alt='Main app icon - beer glass' />
						</Link>
					</div>
					<div className='navbar-container'>
						<ul>
							<li className='navbar-element'>
								<Link to='/' className='link'>
									<span>Home</span>
								</Link>
							</li>
							<li className='navbar-element'>
								<Link to='/' className='link'>
									<span>Products</span>
								</Link>
							</li>
							<li className='navbar-element'>
								<Link to='/' className='link'>
									<span>Add</span>
								</Link>
							</li>
							<li className='navbar-element'>
								<Link to='/' className='link'>
									<span>Order List</span>
								</Link>
							</li>
						</ul>
					</div>
					{/* <div className='login-container'>
						<Button content={'sign up'} isRounded={false} />
					</div> */}
					<button>SignUp</button>
				</div>
			</StyledNavbar>
		</>
	);
};

export default Navbar;

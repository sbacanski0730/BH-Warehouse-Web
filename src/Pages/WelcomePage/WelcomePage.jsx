import React from 'react';
import { StyledWelcomePage } from './WelcomePage.styled';

const Home = () => {
	return (
		<StyledWelcomePage>
			<div className='wrapper'>
				<h1>Welcome to warehouse</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
					labore, sint cupiditate distinctio tempora reiciendis.
				</p>
				{/* TODO: create simple chart with statistics  */}
				<div id='chart'>Here will be some chart with statistics</div>
			</div>
		</StyledWelcomePage>
	);
};

export default Home;

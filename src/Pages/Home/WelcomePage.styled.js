import styled from 'styled-components';
import bg_beer from '../../assets/beer.jpg';

export const StyledWelcomePage = styled.div`
	padding: var(--main-padding);
	height: 100vh;
	background: url(${bg_beer});
	background-repeat: no-repeat;
	background-size: fill;
	background-position: 0% 28%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	.wrapper {
		max-width: 37vw;
		padding: 1rem;

		h1 {
			color: #fff;
			font-size: 3rem;
			line-height: 1.02;
			margin-bottom: 1rem;
		}
		p {
			color: #fff;
			font-size: 1.2rem;
			font-weight: 200;
		}

		/* TODO: style chart */
		#chart {
			border: 1px solid white;
		}
	}
`;

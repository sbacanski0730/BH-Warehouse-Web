import styled from 'styled-components';
import bg_beer from '../../assets/beer.jpg';

export const StyledWelcomePage = styled.div`
	padding: var(--main-padding);

	height: 100vh;
	background: url(${bg_beer});
	background-repeat: no-repeat;
	background-size: fill;
	background-position: 0% 22%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	.wrapper {
		/* border: 1px dashed white; */

		max-width: 580px;
		padding: 1rem;

		h1 {
			color: #fff;
			font-size: 3rem;
			line-height: 1.02;
			margin-bottom: 1rem;
		}
		p {
			color: #fff;
			font-size: 1.4rem;
			font-weight: 200;
		}

		/* TODO: style chart */
		#chart {
			border: 1px solid white;
			margin-top: 1rem;
			height: 12rem;
		}
	}

	@media screen and (max-width: 960px) {
		background-position: 7% 22%;

		.wrapper {
			max-width: 550px;

			h1 {
				font-size: 2.8rem;
			}
		}
	}

	@media screen and (max-width: 780px) {
		background: none;
		align-items: center;
	}
`;

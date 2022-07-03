import styled from 'styled-components';

export const StyledNavbar = styled.div`
	/* border: 1px solid white; */
	background-color: var(--bg);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100vw;
	user-select: none;
	background: var(-bg);
	border-bottom: 1px solid var(--main-color);

	.wrapper {
		width: 100%;
		max-height: 6rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 7%;

		/* max-width: 80%; */
	}

	.icon {
		max-width: 4rem;
		/* border: 1px dashed yellow; */

		img {
			width: 100%;
			user-select: none;
		}
	}

	.navbar-container {
		ul {
			display: flex;
		}

		.navbar-element {
			border: 1px solid transparent;
			list-style: none;
			margin: 1rem;
			padding: 0.5rem 0.1rem;
		}

		.link {
			text-decoration: none;
		}

		.navbar-element:hover {
			cursor: pointer;
			border-bottom: 1px solid var(--main-color);
		}

		.navbar-element span {
			color: var(--main-color);
			font-size: 1.2rem;
		}
	}
`;

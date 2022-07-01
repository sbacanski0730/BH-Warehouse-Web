import styled from 'styled-components';

export const StyledNavbar = styled.div`
	.main-container {
		width: 100%;
		min-height: 6rem;
		display: flex;
		flex-direction: row;
		padding: 0.8rem 1rem;
		border-bottom: 1px solid var(--main-color);
		justify-content: space-between;
		align-items: center;
	}
	.icon-container {
		img {
			max-height: 5rem;
		}
	}

	.navbar-container {
		display: flex;
		flex-direction: row;
		height: 100%;

		ul {
			display: flex;
			text-decoration: none;
			list-style: none;
		}
		li {
			text-transform: uppercase;
			font-weight: 200;
			color: var(--main-color);
			border: 1px solid transparent;
			padding: 0.2rem 0.2rem;
			margin: 0 0.2rem;
			font-size: 1rem;
		}
		li:hover {
			border-bottom: 1px solid white;
			cursor: pointer;
		}
	}
`;

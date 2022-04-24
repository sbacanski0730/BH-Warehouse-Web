import styled from 'styled-components';

export const StyledNavbar = styled.div`
	.main-container {
		border: 1px solid white;
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
			border: 1px solid #fff;
		}
	}

	.navbar-container {
		/* border: 1px dashed white; */

		display: flex;
		flex-direction: row;
		height: 100%;

		p {
			/* border: 1px solid yellow; */

			color: var(--main-color);
			padding: 0.5rem 0.5rem;
			margin: 0 0.2rem;
			/* border-bottom: 1px solid transparent; */
			font-size: 1rem;
		}
		p:hover {
			border-bottom: 1px solid white;
		}
	}
	.login-container {
		/* border: 1px solid pink; */
	}
`;

import styled from 'styled-components';

export const StyledProductsPage = styled.div`
	padding: var(--main-padding);
	min-height: 100vh;

	display: flex;
	flex-direction: column;

	#heading {
		border: 1px solid white;

		color: var(--main-color);
		font-size: 2rem;
		text-align: center;
	}

	.container {
		border: 1px solid yellow;
		color: white;
		padding: 3rem 1rem;

		display: grid;
		grid-template-columns: repeat(auto-fit, 15rem);
		justify-content: center;
		grid-gap: 3rem;
	}
`;

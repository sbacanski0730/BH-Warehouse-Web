import styled from 'styled-components';

export const StyledProductsPage = styled.div`
	/* border: 1px solid white; */
	max-width: 100%;
	position: relative;

	.products-container {
		border: 1px solid lightgreen;

		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
		grid-gap: 1rem;

		justify-content: center;
		/* align-items: center; */
		justify-items: center;
		/* padding: 3rem 0; */
		/* margin: 0 3rem; */
	}

	.product {
		border: 1px solid yellow;

		/* width: 100%; */
		/* height: 100%; */
		max-width: 300px;
		max-height: 350px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
		}

		.info {
			h1 {
			}

			p {
			}
		}
	}
`;

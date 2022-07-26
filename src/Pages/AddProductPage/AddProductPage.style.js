import styled from 'styled-components';

export const StyledAddProductPage = styled.div`
	.wrapper {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */

		padding: var(--main-padding);
	}

	form {
		background-color: var(--black);
		/* text-align: center; */
		padding: 5rem 2rem;
		display: flex;
		flex-direction: column;

		.inputBox {
			/* border: 1px dotted yellow; */

			/* max-width: 45rem; */
			margin-top: 1rem;
			margin-bottom: 1rem;
			background-color: var(--bg);

			input,
			select {
				width: 100%;
				padding: 0.8rem;
				font-size: 1.1rem;
				background: none;
				text-transform: capitalize;
			}

			input {
				color: #000;

				::placeholder {
					color: #fff;
					opacity: 1;
				}
			}

			select {
				color: #fff;

				option {
					background-color: var(--bg);
				}
			}
		}
	}
`;

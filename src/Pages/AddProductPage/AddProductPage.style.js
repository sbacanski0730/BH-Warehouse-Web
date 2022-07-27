import styled from 'styled-components';

export const StyledAddProductPage = styled.div`
	padding: var(--main-padding);

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form {
		width: 100%;
		max-width: 50rem;
		background-color: var(--black);
		padding: 5rem 2rem;
		display: flex;
		flex-direction: column;

		.inputBox {
			margin-top: 1rem;
			margin-bottom: 1rem;
			background-color: var(--bg);

			input,
			select,
			textarea {
				width: 100%;
				padding: 0.8rem;
				font-size: 1.1rem;
				background: none;
				text-transform: capitalize;
				font-weight: 300;

				color: #fff;

				&::placeholder {
					color: #fff;
					opacity: 0.7;
					text-transform: capitalize;
				}
			}

			input[type='date'] {
				text-transform: lowercase;
			}

			textarea {
				resize: none;
				text-transform: none;
				min-height: 7rem;
			}

			select {
				color: #fff;
				opacity: 0.7;

				option {
					background-color: var(--bg);
				}
			}
		}
	}
`;

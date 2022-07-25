import styled from 'styled-components';

export const StyledProductCard = styled.div`
	position: relative;
	width: 280px;
	/* max-width: 100%; */
	height: 360px;
	/* max-height: 100%; */
	overflow: hidden;
	box-shadow: 8px 8px 6px -8px rgba(211, 173, 127, 1);

	&:hover {
		.info {
			opacity: 0;
		}

		.hover {
			bottom: 0;
		}
	}

	&:before {
		content: '';
		position: absolute;
		bottom: -50%;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 1) 7%,
			rgba(255, 255, 255, 0) 100%
		);
		transition: all 0.2s ease;
	}

	&:hover:before {
		bottom: 0;
	}

	.delete-button {
		background-color: var(--main-color);
		border-radius: 50%;
		position: absolute;
		top: 10px;
		right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;

		font-size: 20px;
		z-index: 4;

		&:hover {
			cursor: pointer;
		}

		#delete-icon {
			color: var(--bg);
			font-size: 1.2rem;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.info {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0.6rem 0.8rem;
		transition: all 0.1s ease;
		color: #fff;

		h1 {
			font-size: 1.5rem;
			font-weight: 300;
			letter-spacing: 1px;
			text-transform: capitalize;
		}

		p {
			font-weight: 300;
			font-size: 1.1rem;
		}

		span {
			font-size: 1.3rem;
			font-weight: 600;
			color: #cd0e0e;
			padding-left: 0.3rem;
		}
	}

	.hover {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: -100%;
		left: 0;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0.6rem 0.8rem;
		transition: all 0.2s ease;
		color: #fff;

		h1 {
			font-size: 1.5rem;
			font-weight: 300;
			letter-spacing: 1px;
		}

		p {
			font-size: 1rem;
		}

		span {
			font-size: 1.1rem;
			font-weight: 500;
			color: #cd0e0e;
			padding-left: 0.3rem;
		}

		.description {
			font-weight: 300;
			margin: 0.3rem 0;
		}
	}
`;

import styled from 'styled-components';

export const StyledProductCard = styled.div`
	position: relative;
	width: 280px;
	height: 360px;
	overflow: hidden;
	box-shadow: 8px 8px 6px -8px rgba(211, 173, 127, 1);

	&:hover {
		cursor: pointer;

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

		h1 {
			font-size: 1.5rem;
			font-weight: 300;
			letter-spacing: 1px;
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
		bottom: -50%;
		left: 0;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0.6rem 0.8rem;
		transition: all 0.2s ease;

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

import styled from 'styled-components';

export const StyledProductCard = styled.div`
	/* border: 1px solid white; */

	position: relative;
	width: 280px;
	height: 360px;

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 15%,
			rgba(255, 255, 255, 0) 100%
		);
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
		/* border: 1px solid white; */

		/* width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 3;

		padding: 1rem 1.5rem;

		h1 {
			font-size: 1.6rem;
		}

		p {
			padding-top: 0.3rem;
			font-size: 1.1rem;
		}

		span {
			color: #cd0e0e;
			font-size: 1.3rem;
		} */
	}

	.hover-info {
		/* border: 1px solid white; */

		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 3;
		padding: 0.7rem 1.3rem;

		h1 {
			font-size: 1.6rem;
		}

		p {
			padding-top: 0.3rem;
			font-size: 0.9rem;
		}

		span {
			color: #cd0e0e;
			font-size: 1rem;
		}
	}
`;

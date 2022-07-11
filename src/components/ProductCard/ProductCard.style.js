import styled from 'styled-components';

export const StyledProductCard = styled.div`
	/* border: 1px solid white; */

	width: 280px;
	height: 360px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	position: relative;
	padding: 1rem;

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		/* display: block; */
		width: 100%;
		height: 100%;
		opacity: 1;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 1) 10%,
			rgba(255, 255, 255, 0) 37%
		);
		z-index: 2;
		/* border-top-left-radius: 20%; */
	}

	&:hover:before {
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 1) 10%,
			rgba(255, 255, 255, 0) 70%
		);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}

	.info {
		position: relative;
		z-index: 3;
	}
`;

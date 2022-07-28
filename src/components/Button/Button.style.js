import styled from 'styled-components';

export const StyledButton = styled.div`
	display: inline;

	.btn {
		border: none;
		outline: none;
		/* text-align: center; */

		&:hover {
			cursor: pointer;
		}
	}

	/* Button STYLES */

	.btn-default {
		background-color: var(--main-color);
		border-radius: 5px;
		color: var(--bg);
	}

	.btn-outline {
		background: transparent;
		border: 1px solid var(--main-color);
		border-radius: 5px;
		color: var(--main-color);
	}

	.btn-no-border {
		background-color: var(--main-color);
		color: var(--bg);
	}

	/* Button SIZES */
	.btn-normal {
		font-size: 1.2rem;
		padding: 0.5rem 1.1rem;
	}

	.btn-wide {
		font-size: 1.2rem;
		width: 100%;
		height: 100%;
		transition: all 0.3s ease;
	}

	.hover-default {
		/* no hover effect */
	}

	.hover-font-increase {
		&:hover {
			font-size: 1.6rem;
			letter-spacing: 2px;
		}
	}
`;

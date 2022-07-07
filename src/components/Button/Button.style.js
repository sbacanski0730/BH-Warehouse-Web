import styled from 'styled-components';

export const StyledButton = styled.div`
	.btn {
		background-color: purple;
		border: none;
		outline: none;
		/* text-align: center; */
	}

	.btn:hover {
		cursor: pointer;
	}

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
		border: 1px dotted yellow;

		background-color: var(--main-color);
		color: var(--bg);
	}

	.btn-normal {
		font-size: 1.2rem;
		padding: 0.5rem 1.1rem;
	}

	.btn-wide {
		width: 100%;
		height: 100%;
	}
`;

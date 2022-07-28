import styled from 'styled-components';

export const StyledRegisterPage = styled.div`
	/* TODO: add responsiveness to this component */
	.box-container {
		/* border: 1px solid white; */
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.form {
		background-color: var(--bg);
		border: 2px solid var(--main-color);
		border-radius: 10px;
		box-shadow: 0px 0px 32px 17px rgba(211, 173, 127, 0.2);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 850px;
		height: 590px;
		padding: 2rem;

		button {
			border-radius: 5px;
			background: var(--main-color);
			color: white;
			max-height: 3rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			color: white;
			font-size: 1.7rem;
			font-weight: 600;
			letter-spacing: 1px;
			transition: all 0.3s ease;
			margin-top: 1.3rem;
		}
		button:hover {
			background-color: #ca9c64;
			cursor: pointer;
			letter-spacing: 2px;
		}
		button:active {
			background-color: #ca9c64;
			box-shadow: inset 0px 0px 22px -4px rgba(0, 0, 0, 0.4);
		}
	}

	.form-element {
		min-width: 30rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 0.6rem 0;
		label {
			width: 100%;
			color: white;
			font-size: 1.5rem;
			padding-left: 0.5rem;
			margin-bottom: 0.4rem;
		}
		input {
			border: 1px solid var(--main-color);
			border-radius: 5px;
			width: 100%;
			min-height: 2rem;
			background: none;
			padding: 0.5rem 0.8rem;
			caret-color: var(--main-color);
			color: var(--main-color);
		}
		input:focus {
			box-shadow: inset 0px 0px 29px -5px rgba(211, 173, 127, 0.25);
		}
	}

	.login-page-link {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;

		padding: 0.2rem 0;
		margin-top: 0.3rem;

		p {
			color: white;
			cursor: default;
		}

		a {
			text-decoration: none;
			color: var(--main-color);
			margin-left: 10px;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;

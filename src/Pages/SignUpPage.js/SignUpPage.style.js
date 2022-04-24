import styled from 'styled-components';

export const StyledSignUp = styled.div`
	/* border: 1xp solid white; */
	.box-container {
		height: 100vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.form {
		background-color: var(--bg);
		border: 2px solid var(--main-color);
		border-radius: 10px;
		box-shadow: 0px 0px 32px 17px rgba(211, 173, 127, 0.25);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 850px;
		height: 590px;

		padding: 2rem;

		button {
			/* border: none; */
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
		}
	}

	.form-element {
		/* border: 1px dashed pink; */
		/* padding: 2rem 0; */
		min-width: 30rem;
		/* height: 4rem; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 1rem 0;
		label {
			/* border: 1px solid green; */
			width: 100%;
			color: white;
			font-size: 1.7rem;
			padding: 0 0.4rem;
			padding-bottom: 0.2rem;
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
	}
`;

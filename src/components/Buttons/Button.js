import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
	background-color: var(--main-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: var(--bg);
	padding: 0.5rem 1.3rem;
	text-transform: uppercase;
	/* max-width: 116px; */
	/* max-width: 125px; */
	/* transition: 1s linear; */
	p {
		font-size: 1.1rem;
		transition: 0.1s linear;
	}
	&:hover {
		background-color: #d0a571;
		cursor: pointer;
		/* width: fit-content; */

		p {
			font-size: 1.12rem;
		}
	}
`;

const Button = ({ content }) => {
	return (
		<>
			<StyledButton>
				<p>{content}</p>
			</StyledButton>
		</>
	);
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: var(--main-color);
	color: var(--bg);
	padding: 0.5rem 1.3rem;
	border-radius: ${props => (props.isRounded ? '20px' : '0%')};
	p {
		text-transform: capitalize;
		font-size: 1.1rem;
		font-weight: 600;
	}
	&:hover {
		background-color: #d0a571;
		cursor: pointer;
		width: fit-content;
	}
`;

const Button = ({ content, isRounded }) => {
	return (
		<>
			<StyledButton isRounded={isRounded}>
				<p>{content}</p>
			</StyledButton>
		</>
	);
};

Button.defaultProps = {
	content: 'ok',
	isRounded: true,
};

Button.propTypes = {
	content: PropTypes.string.isRequired,
	isRounded: PropTypes.bool,
};

export default Button;

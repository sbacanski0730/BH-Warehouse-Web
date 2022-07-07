import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ children, btn_style, btn_size }) => {
	const STYLES = ['btn-default', 'btn-outline', 'btn-no-border'];
	const SIZES = ['btn-normal', 'btn-wide'];

	const styleCheck = STYLES.includes(btn_style) ? btn_style : STYLES[0];
	const sizeCheck = SIZES.includes(btn_size) ? btn_size : SIZES[0];

	return (
		<>
			<StyledButton>
				<button className={`btn ${styleCheck} ${sizeCheck}`}>{children}</button>
			</StyledButton>
		</>
	);
};

export default Button;

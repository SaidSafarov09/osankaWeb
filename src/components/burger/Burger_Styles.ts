import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'

const Burger = styled.button<{ isOpen: boolean }>`
	width: 60px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: inline-block;
		width: 40px;
		height: 2px;
		background-color: ${theme.colors.font};
		transition: ${theme.animations.transition};
		position: relative;
		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: transparent;
			`}
	}

	span::after,
	span::before {
		content: '';
		display: inline-block;
		width: 40px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
	}

	span::before {
		top: 10px;
		transition: ${theme.animations.transition};

		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				top: 0;
				transform: rotate(-45deg);
			`}
	}
	span::after {
		transition: ${theme.animations.transition};
		bottom: 10px;
		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				bottom: 0;
				transform: rotate(45deg);
			`}
	}
`

export const S = { Burger }

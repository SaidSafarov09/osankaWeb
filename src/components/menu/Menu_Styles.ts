import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'

const Menu = styled.nav<{ modalIsOpen?: boolean }>`
	ul {
		display: flex;
		gap: 30px;
	}

	a {
		position: relative;
		font-family: 'Cormorant Garamond';
		font-size: 18px;
		font-weight: 600;
		line-height: 130%;
		transition: ${theme.animations.transition};
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			bottom: -4px;
			left: 0;
			right: 0;
			height: 0px;
			background-color: ${theme.colors.borderColor};
			transition: ${theme.animations.transition};
		}
	}
	a:hover {
		color: ${theme.colors.borderColor};
	}
	a.active {
		color: ${theme.colors.borderColor};

		&:after {
			height: 2px;
		}
	}

	@media ${theme.media.tablet} {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: 1s ease-in-out;
		background-color: ${theme.colors.backgroundColor};

		ul {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		a {
			font-size: 32px;
		}
	}
	${props =>
		props.modalIsOpen &&
		css<{ modalIsOpen?: boolean }>`
			left: 100% !important;
		`}
`

export const S = { Menu }

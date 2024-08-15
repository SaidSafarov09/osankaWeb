import styled, { css } from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

const Sidebar = styled.div<{ isOpen: boolean }>`
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	width: 475px;
	background: ${theme.colors.font};
	background-color: ${theme.colors.backgroundColor};
	padding: 0 80px;
	transition: 1s ease-in-out;

	${FlexWrapper} {
		height: 100%;
	}

	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			right: -100%;
		`}
`
const Text = styled.p`
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
`

export const S = { Sidebar, Text }

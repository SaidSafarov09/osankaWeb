import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

const DesktopHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 5;
	${Container} {
		border-bottom: 1px solid ${theme.colors.font};
		padding: 40px 15px 30px 15px;
	}
`
const Link = styled.a`
	& svg {
		stroke: ${theme.colors.font};
		transition: ${theme.animations.transition};
	}
	& svg:hover {
		stroke: ${theme.colors.borderColor};
	}
`

export const S = { DesktopHeader, Link }

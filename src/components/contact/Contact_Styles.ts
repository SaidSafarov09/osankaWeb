import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const Contacts = styled.div``
const Title = styled.h5`
	font-size: 24px;
	font-weight: 700;
	line-height: 120%;
	margin-bottom: 25px;
`
const Link = styled.a`
	display: block;
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
	margin-bottom: 15px;
	transition: ${theme.animations.transition};

	&:hover {
		color: ${theme.colors.borderColor};
	}
`

const Text = styled.span`
	display: block;
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
`

export const S = { Contacts, Title, Link, Text }

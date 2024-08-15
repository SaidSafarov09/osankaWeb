import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { theme } from '../../styles/Theme'

const Footer = styled.footer`
	${FlexWrapper} {
		padding: 80px 0;
		border-top: 1px solid ${theme.colors.font};
		border-bottom: 1px solid ${theme.colors.font};

		@media ${theme.media.tablet} {
			display: none;
		}
	}
`

const Section = styled.div``
const Title = styled.h5`
	font-family: 'Cormorant Garamond';
	font-size: 24px;
	font-weight: 700;
	line-height: 120%;
	margin-bottom: 25px;
`

const Copyright = styled.p`
	text-align: center;
	padding: 30px 0;
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 700;
	line-height: 140%;
	@media ${theme.media.tablet} {
		border-top: 1px solid ${theme.colors.font};
	}
`

export const S = { Footer, Section, Title, Copyright }

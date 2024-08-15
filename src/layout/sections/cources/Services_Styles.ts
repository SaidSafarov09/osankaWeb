import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

const Services = styled.section`
padding-top:100px;
padding-bottom: 100px`
const ServicesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 60px;

	@media ${theme.media.tablet} {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(1, 1fr);
		gap: 15px;
	}
`
const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	&:after {
		content: '';
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: ${theme.animations.transition};
		background: rgba(0, 0, 0, 0.35);
	}
	
`
const ServicesItem = styled.div`
	padding-top: 20px;
	cursor: pointer;
	position: relative;
	
	&:hover {
		${ImageWrapper}:after {
			background: transparent;
		}
	}
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
const Text = styled.h3`
	position: absolute;
	top: 50%;
	left: 50px;
	font-size: 1.4vw;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0%;
	font-family: 'Cormorant Garamond';
	font-weight: 700;
	text-align:center;
	@media ${theme.media.desktop} {
		font-size: 1.5vw;
	}

	@media ${theme.media.tablet} {
		font-size: 2.5vw;
	}
	@media ${theme.media.mobile} {
		font-size: 5vw;
	}
`


export const S = {
	Services,
	ServicesContainer,
	ServicesItem,
	ImageWrapper,
	Image,
	Text,
}

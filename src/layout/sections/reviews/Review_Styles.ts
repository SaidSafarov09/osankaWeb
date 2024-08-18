import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

const Team = styled.section`
	padding: 180px 0 100px;
	@media ${theme.media.tablet} {
		padding: 180px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 180px 0 30px;
	}
`
const TeamWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 60px;
	column-gap: 24px;
	@media ${theme.media.tablet} {
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(1, 1fr);
		gap: 30px;
	}
`

const TeamItem = styled.div`
	padding-top: 20px;
	padding-right: 20px;
	cursor: pointer;
`
const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 30px;

	&::before {
		content: '';
		display: inline-block;
		position: absolute;
		width: 80%;
		height: 100%;
		border: 1px solid ${theme.colors.borderColor};
		top: -20px;
		right: 0px;
		z-index: -1;
	}
`
const Image = styled.img`
	width: 80%;
`
const Name = styled.p`
	font-family: 'Cormorant Garamond';
	font-size: 27px;
	font-weight: 700;
	line-height: 130%;
`
const Text = styled.p`
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
`

export const S = {
	Team,
	TeamWrapper,
	TeamItem,
	ImageWrapper,
	Image,
	Name,
	Text,
}

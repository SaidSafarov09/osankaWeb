import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { PriceListType } from './priceList/PriceList'

const Price = styled.section`
	padding: 180px 0 100px;
	@media ${theme.media.tablet} {
		padding: 180px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 180px 0 30px;
	}
`
const PriceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 24px;
	row-gap: 80px;

	@media screen and (max-width: 1168px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

const Image = styled.img`
	width: 100%;
	aspect-ratio: 636/536;
`
const List = styled.ul<PriceListType>`
	width: 100%;
	max-width: 526px;
	margin-left: ${props => props.mode || '0px'};
`

const Item = styled.li`
	padding-bottom: 20px;
	padding-top: 40px;
	border-bottom: 1px solid ${theme.colors.font};
`
const Title = styled.h5`
	font-family: 'Cormorant Garamond';
	font-size: 27px;
	font-weight: 700;
	line-height: 130%;
`
const Coast = styled.span`
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

export const S = { Price, PriceWrapper, Image, List, Item, Title, Coast, Text }

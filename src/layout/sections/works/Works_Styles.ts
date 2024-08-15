import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

const Works = styled.section`
	padding-bottom: 100px;
	padding-top: 100px;
`

const WorksWrapper = styled.section`
	margin-top: 55px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 1fr;
	gap: 24px;

	@media ${theme.media.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(1, 1fr);
	}
`
const Image = styled.img`
	width: 100%;
	aspect-ratio: 1/1;
`

export const S = { Image, WorksWrapper, Works }

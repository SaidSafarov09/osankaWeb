import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'
import { CosmeticsItem } from './cosmeticsItem/CosmeticsItem'
const data = [
	{
		id: 'kevinLogo',
		icon: 'kevinLogo',
		width: '69',
		height: '108',
		viewBox: '0 0 69 108',
	},
	{
		id: 'oribeLogo',
		icon: 'oribeLogo',
		width: '90',
		height: '120',
		viewBox: '0 0 90 120',
	},
	{
		id: 'alternaLogo',
		icon: 'alternaLogo',
		width: '190',
		height: '98',
		viewBox: '0 0 190 98',
	},
	{
		id: 'aldoLogo',
		icon: 'aldoLogo',
		width: '110',
		height: '108',
		viewBox: '0 0 110 108',
	},
]
export const Cosmetics: React.FC = () => {
	return (
		<StyledCosmetics>
			<Container>
				<FlexWrapper wrap='wrap' justify='space-around'>
					{data.map(item => (
						<Slide key={item.id}>
							<CosmeticsItem item={item} />
						</Slide>
					))}
				</FlexWrapper>
			</Container>
		</StyledCosmetics>
	)
}
const StyledCosmetics = styled.section`
	padding: 150px 0 168px;
	@media ${theme.media.tablet} {
		padding: 80px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 50px 0 30px;
	}
`

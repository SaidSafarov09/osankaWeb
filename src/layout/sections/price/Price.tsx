import { Fade } from 'react-awesome-reveal'
import img from '../../../assets/images/prices/price.jpg'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { S } from './Price_Styles'
import { PriceList } from './priceList/PriceList'

export const Price: React.FC = () => {
	return (
		<S.Price>
			<Container>
				<SectionTitle>Цены на услуги</SectionTitle>
				<S.PriceWrapper>
					<Fade>
						<S.Image src={img} alt='price' />
					</Fade>
					<Fade>
						<PriceList mode='auto' />
					</Fade>
					<Fade>
						<PriceList />
					</Fade>
					<Fade>
						<S.Image src={img} alt='price' />
					</Fade>
					<Fade>
						<S.Image src={img} alt='price' />
					</Fade>
					<Fade>
						<PriceList mode='auto' />
					</Fade>
				</S.PriceWrapper>
			</Container>
		</S.Price>
	)
}

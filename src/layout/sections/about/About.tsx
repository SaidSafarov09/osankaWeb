import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { S } from './About_Styles'
import { Slider } from './slider/Slider'

export const About: React.FC = () => {
	return (
		<S.About id='about'>
			<FlexWrapper direction='column' align='center'>
				<Icon idIcon='quoteIcon' width='80' height='64' viewBox='0 0 80 64' />
				<Slider />
			</FlexWrapper>
		</S.About>
	)
}

import { NavLink } from 'react-router-dom'
import error from '../../../assets/images/Error.png'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { S } from './Error_Styles'

export const Error: React.FC = () => {
	return (
		<S.Error>
			<Container>
				<FlexWrapper direction='column' align='center' justify='center'>
					<S.Image src={error} alt='error' />
					<SectionTitle>Страница не найдена</SectionTitle>
					<NavLink to='/home'>
						<S.Link>на главную</S.Link>
					</NavLink>
				</FlexWrapper>
			</Container>
		</S.Error>
	)
}

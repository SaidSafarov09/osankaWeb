import { FlexWrapper } from '../../../../components/FlexWrapper'
import { S } from '../Price_Styles'

export const PriceItem: React.FC = () => {
	return (
		<S.Item>
			<FlexWrapper justify='space-between' align='center'>
				<S.Title>Женская укладк</S.Title>
				<S.Coast>1 000 ₽ </S.Coast>
			</FlexWrapper>

			<S.Text>+ обработка кончинков волос</S.Text>
		</S.Item>
	)
}

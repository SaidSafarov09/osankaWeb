import { S } from '../Price_Styles'
import { PriceItem } from '../priceItem/PriceItem'
export type PriceListType = { mode?: string }
export const PriceList: React.FC<PriceListType> = (props: PriceListType) => {
	return (
		<S.List mode={props.mode}>
			<PriceItem />
			<PriceItem />
			<PriceItem />
			<PriceItem />
		</S.List>
	)
}

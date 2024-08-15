import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type CosmeticsItemPropsType = {
	id: string
	icon: string
	width: string
	height: string
	viewBox: string
}

export const CosmeticsItem: React.FC<{
	item: CosmeticsItemPropsType
}> = (props: { item: CosmeticsItemPropsType }) => {
	return (
		<StyledCosmeticsItem>
			<Icon
				idIcon={props.item.icon}
				width={props.item.width}
				height={props.item.height}
				viewBox={props.item.viewBox}
			/>
		</StyledCosmeticsItem>
	)
}

const StyledCosmeticsItem = styled.div`
	width: 100%;
	max-width: 306px;
	padding: 10px;
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.5;
`

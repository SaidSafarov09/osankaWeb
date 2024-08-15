import { S } from '../Team_Styles'

type TeamItemPropsType = {
	id: string
	src: string
	name: string
	text: string
}

export const TeamItem: React.FC<{ item: TeamItemPropsType }> = (props: {
	item: TeamItemPropsType
}) => {
	return (
		<S.TeamItem>
			<S.ImageWrapper>
				<S.Image src={props.item.src} alt={props.item.name} />
			</S.ImageWrapper>
			<S.Name>{props.item.name}</S.Name>
			<S.Text>{props.item.text}</S.Text>
		</S.TeamItem>
	)
}

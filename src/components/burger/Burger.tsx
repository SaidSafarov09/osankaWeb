import { S } from './Burger_Styles'

type BurgerPropsType = { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }

export const Burger: React.FC<BurgerPropsType> = (props: BurgerPropsType) => {
	return (
		<S.Burger
			isOpen={!props.isOpen}
			onClick={() => {
				props.setIsOpen(!props.isOpen)
			}}
		>
			<span></span>
		</S.Burger>
	)
}

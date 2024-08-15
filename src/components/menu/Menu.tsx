import { NavLink } from 'react-router-dom'
import { INavItem } from '../../layout/header/desktopHeader/DesktopHeader'
import { S } from './Menu_Styles'

interface IMenuProps {
	navItems: INavItem[]
	modalIsOpen?: boolean
	setModalIsOpen?: (isOpen: boolean) => void
}

export const Menu: React.FC<IMenuProps> = (props: IMenuProps) => {
	return (
		<S.Menu modalIsOpen={props.modalIsOpen}>
			<ul>
				{props.navItems.map((item: INavItem) => (
					<li
						key={item.id}
						onClick={() => {
							if (props.setModalIsOpen) {
								props.setModalIsOpen(!props.modalIsOpen)
							}
						}}
					>
						<NavLink to={item.link}>{item.text}</NavLink>
					</li>
				))}
			</ul>
		</S.Menu>
	)
}

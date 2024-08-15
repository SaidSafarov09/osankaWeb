import { FlexWrapper } from '../../../components/FlexWrapper'
import { Burger } from '../../../components/burger/Burger'
import { Contact } from '../../../components/contact/Contact'
import { OperatingMode } from '../../../components/operatingMode/OperatingMode'
import { S } from './Sidebar_Styles'

type SidebarPropsType = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}
export const Sidebar: React.FC<SidebarPropsType> = (
	props: SidebarPropsType
) => {
	return (
		<S.Sidebar isOpen={props.isOpen}>
			<FlexWrapper direction='column' justify='space-around'>
				<Burger isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
				<S.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
					adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl
					est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
					Tortor donec pellentesque leo ac placerat. Morbi.
				</S.Text>
				<Contact />
				<OperatingMode />
			</FlexWrapper>
		</S.Sidebar>
	)
}

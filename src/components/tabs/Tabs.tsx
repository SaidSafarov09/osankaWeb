import { S } from './Tabs_Styles'
export type TabsStatus = 'all' | 'hairdressing' | 'manicure' | 'pedicure'

export type TabsType = {
	id: string
	text: string
	status: TabsStatus
}
type TabsPropsType = {
	currentFilterStatus: string
	changeFilterStatus: (value: TabsStatus) => void
	tabs: TabsType[]
}

export const Tabs: React.FC<TabsPropsType> = (props: TabsPropsType) => {
	return (
		<S.Tabs>
			{props.tabs.map(item => (
				<S.Link
					active={props.currentFilterStatus === item.status}
					key={item.id}
					onClick={() => {
						props.changeFilterStatus(item.status)
					}}
				>
					{item.text}
				</S.Link>
			))}
		</S.Tabs>
	)
}

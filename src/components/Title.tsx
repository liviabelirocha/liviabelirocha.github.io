import { Container, Shadow, Text } from '../styles/components/Title'

import { TitleInterface } from '../interfaces/Title'

export default function Title({ title, shadow }: TitleInterface) {
	return (
		<Container>
			<Shadow>{shadow}</Shadow>
			<Text>{title}</Text>
		</Container>
	)
}

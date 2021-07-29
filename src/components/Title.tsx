import { Container, Shadow, Text } from '../styles/components/Title'

interface Title {
	title: String
	shadow: String
}

export default function Title({ title, shadow }: Title) {
	return (
		<Container>
			<Shadow>{shadow}</Shadow>
			<Text>{title}</Text>
		</Container>
	)
}

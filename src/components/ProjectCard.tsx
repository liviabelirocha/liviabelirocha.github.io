import { Container, Title, Description } from '../styles/components/ProjectCard'

interface ProjectCard {
	title: String
	description: String
	icon: any
}

export default function ProjectCard({
	title,
	description,
	icon: Icon
}: ProjectCard) {
	return (
		<Container>
			<Icon />
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Container>
	)
}

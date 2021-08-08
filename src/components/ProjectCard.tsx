import { Container, Title, Description } from '../styles/components/ProjectCard'

import { ProjectCardInterface } from '../interfaces/ProjectCard'

export default function ProjectCard({
	title,
	description,
	icon: Icon
}: ProjectCardInterface) {
	return (
		<Container>
			<Icon size="4em" color="#bb1cff" />
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Container>
	)
}

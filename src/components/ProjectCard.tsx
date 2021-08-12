import { Container, Title, Description } from '../styles/components/ProjectCard'

import { ProjectCardInterface } from '../interfaces/ProjectCard'

export default function ProjectCard({
	title,
	description,
	icon: Icon,
	link
}: ProjectCardInterface) {
	return (
		<Container href={link} target="_blank" rel="noopener noreferrer">
			<Icon size="4em" color="#bb1cff" />
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Container>
	)
}

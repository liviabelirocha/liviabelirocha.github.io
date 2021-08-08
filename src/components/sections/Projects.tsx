import { Container, Content } from '../../styles/components/Projects'

import ProjectCard from '../ProjectCard'
import Title from '../Title'

import { GiWheat } from 'react-icons/gi'
import { RiPlantLine } from 'react-icons/ri'

const projects = [
	{
		key: 1,
		title: 'WheatTabs',
		description:
			'It was the first website I made when I really started focusing on web dev. It lists my Youtube videos (song covers) and redirects the user to a PDF hosted on AWS that contains the tabs for the song. It is made with React and Node JS with Express and MongoDb.',
		icon: GiWheat
	},
	{
		key: 2,
		title: 'Plant Daddy',
		description:
			'It is a React Native app that has information on several plants, and the user can add plants to his account, and set reminders to water and fertilize the plant. The backend is made with Node Js with Express. All of that using Typescript.',
		icon: RiPlantLine
	}
]

export default function Projects() {
	return (
		<Container>
			<Title title="Projects" shadow="Project" />
			<Content>
				{projects.map(project => {
					return (
						<ProjectCard
							title={project.title}
							description={project.description}
							icon={project.icon}
							key={project.key}
						/>
					)
				})}
			</Content>
		</Container>
	)
}

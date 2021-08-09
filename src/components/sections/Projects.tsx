import { Container, Content } from '../../styles/components/Projects'

import useTranslation from '../../hooks/useTranslation'

import ProjectCard from '../ProjectCard'
import Title from '../Title'

import { GiWheat } from 'react-icons/gi'
import { RiPlantLine } from 'react-icons/ri'

export default function Projects() {
	const { t } = useTranslation()

	const projects = [
		{
			key: 1,
			title: 'WheatTabs',
			description: t('wt'),
			icon: GiWheat
		},
		{
			key: 2,
			title: 'Plant Daddy',
			description: t('pd'),
			icon: RiPlantLine
		}
	]

	return (
		<Container>
			<Title title={t('projectsTitle')} shadow={t('projectsSubtitle')} />
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

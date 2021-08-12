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
			icon: GiWheat,
			link: 'https://wheattabs.herokuapp.com'
		},
		{
			key: 2,
			title: 'Plant Daddy',
			description: t('pd'),
			icon: RiPlantLine,
			link: 'https://www.behance.net/gallery/119747057/Plant-Daddy-App-UIUX-Webdesign'
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
							link={project.link}
						/>
					)
				})}
			</Content>
		</Container>
	)
}

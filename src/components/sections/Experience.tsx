import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import useTranslation from '../../hooks/useTranslation'

import { Container } from '../../styles/components/Experience'

import Title from '../Title'

import { IoHourglassOutline, IoLogoNodejs, IoLogoVue } from 'react-icons/io5'
import { DiDjango } from 'react-icons/di'

export default function Experience() {
	const { t } = useTranslation()

	const experiences = [
		{
			key: 1,
			title: `Falco Dev 2021 - ${t('status')}`,
			description: t('desc'),
			icons: [IoLogoNodejs, IoLogoVue]
		},
		{
			key: 2,
			title: 'EadGuru 2020 - 2021',
			description: t('desc'),
			icons: [DiDjango, IoLogoVue]
		}
	]

	return (
		<Container>
			<Title
				title={t('experienceTitle')}
				shadow={t('experienceSubtitle')}
			/>
			<VerticalTimeline>
				{experiences.map(experience => (
					<VerticalTimelineElement
						key={experience.key}
						className="vertical-timeline-element--work custom-line"
						contentStyle={{
							background: '#191919'
						}}
						contentArrowStyle={{
							borderRight: '7px solid #191919'
						}}
					>
						<h3 className="vertical-timeline-element-title title">
							{experience.title}
						</h3>
						<h4 className="vertical-timeline-element-subtitle subtitle">
							{experience.description}
						</h4>
						<div className="stack">
							{experience.icons.map((Icon, index) => (
								<Icon
									key={index}
									size="2em"
									className="stack-icon"
								/>
							))}
						</div>
					</VerticalTimelineElement>
				))}
				<VerticalTimelineElement
					iconStyle={{
						color: '#fff',
						background: '#bb1cff'
					}}
					icon={<IoHourglassOutline />}
				/>
			</VerticalTimeline>
		</Container>
	)
}

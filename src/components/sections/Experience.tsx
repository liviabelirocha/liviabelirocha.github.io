import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { Container } from '../../styles/components/Experience'

import Title from '../Title'

import { IoHourglassOutline, IoLogoNodejs, IoLogoVue } from 'react-icons/io5'
import { DiDjango } from 'react-icons/di'

const experiences = [
	{
		key: 1,
		title: 'Falco Dev 2021 - Present',
		description: 'Fullstack Developer',
		icons: [IoLogoNodejs, IoLogoVue]
	},
	{
		key: 2,
		title: 'EadGuru 2020 - 2021',
		description: 'Fullstack Developer',
		icons: [DiDjango, IoLogoVue]
	}
]

export default function Experience() {
	return (
		<Container>
			<Title title="Experience" shadow="Experience" />
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

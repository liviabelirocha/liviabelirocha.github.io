import { Container, Title, Content } from '../styles/components/SkillSection'

import { SkillSectionInterface } from '../interfaces/Skills'
import SkillCard from './SkillCard'

export default function SkilSection({ title, skills }: SkillSectionInterface) {
	return (
		<Container>
			<Title>{title}:</Title>
			<Content>
				{skills.map((skill, index) => (
					<SkillCard
						icon={skill.icon}
						name={skill.name}
						key={index}
					/>
				))}
			</Content>
		</Container>
	)
}

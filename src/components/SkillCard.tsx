import { Container, Name } from '../styles/components/SkillCard'

import { SkillInterface } from '../interfaces/Skills'

export default function SkillCard({ icon: Icon, name }: SkillInterface) {
	return (
		<Container>
			{Icon && <Icon size="2.5em" className={name && 'skill-icon'} />}
			{name && <Name>{name}</Name>}
		</Container>
	)
}

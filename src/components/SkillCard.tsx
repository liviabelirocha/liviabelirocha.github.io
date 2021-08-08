import { Container, Name } from '../styles/components/SkillCard'

import { SkillInterface } from '../interfaces/Skills'

export default function SkillCard({ icon: Icon, name }: SkillInterface) {
	return (
		<Container>
			{Icon && <Icon size="4em" />}
			<Name>{name}</Name>
		</Container>
	)
}

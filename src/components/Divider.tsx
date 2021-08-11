import { Container } from '../styles/components/Divider'

import { DividerInterface } from '../interfaces/Divider'

export default function Divider({ goUp }: DividerInterface) {
	return <Container up={goUp}></Container>
}

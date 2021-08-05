import { Container } from '../styles/pages/Home'

import AboutMe from '../components/AboutMe'
import Intro from '../components/Intro'

export default function Home() {
	return (
		<Container>
			<Intro />
			<AboutMe />
		</Container>
	)
}

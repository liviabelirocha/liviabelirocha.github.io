import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import AboutMe from '../components/sections/AboutMe'
import Intro from '../components/sections/Intro'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'

export default function Home() {
	return (
		<>
			<Head>
				<title>Lívia Belizário</title>
			</Head>
			<Container>
				<Intro />
				<AboutMe />
				<Projects />
				<Experience />
			</Container>
		</>
	)
}

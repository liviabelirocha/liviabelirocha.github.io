import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import AboutMe from '../components/sections/AboutMe'
import Intro from '../components/sections/Intro'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Skills from '../components/sections/Skills'

import Divider from '../components/Divider'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<title>Lívia Belizário</title>
			</Head>
			<Container>
				<Intro />
				<Divider goUp={false} />
				<AboutMe />
				<Divider goUp={true} />
				<Projects />
				<Divider goUp={false} />
				<Experience />
				<Divider goUp={true} />
				<Skills />

				<Footer />
			</Container>
		</>
	)
}

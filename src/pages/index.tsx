import Head from "next/head";
import { Container } from "../styles/pages/Home";

import AboutMe from "../components/sections/AboutMe";
import Experience from "../components/sections/Experience";
import Intro from "../components/sections/Intro";
import Projects from "../components/sections/Projects";

import Divider from "../components/Divider";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Lívia Belizário</title>
			</Head>
			<Container>
				<Intro />
				<Divider />
				<AboutMe />
				<Divider goUp />
				<Projects />
				<Divider />
				<Experience />
				{/* <Divider goUp={true} /> */}
				{/* <Skills /> */}

				<Footer />
			</Container>
		</>
	);
}

import { Container, Flags } from '../styles/components/Intro'

import Logo from '../assets/initialLogo.svg'
import GithubLogo from '../assets/github2.svg'
import BrFlag from '../assets/br.svg'
import EnFlag from '../assets/en.svg'

export default function Intro() {
	return (
		<Container>
			<a
				href="https://github.com/liviabelirocha/liviabelirocha.github.io"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GithubLogo className="github-logo" />
			</a>
			<Logo className="pc-logo" />
			<p>Hello, I am</p>
			<b>Lívia Belizário</b>
			<small>Fullstack Developer</small>

			<Flags>
				<BrFlag className="flag" />
				<EnFlag className="flag" />
			</Flags>
		</Container>
	)
}

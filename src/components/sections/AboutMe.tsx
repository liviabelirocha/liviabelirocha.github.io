import {
	Container,
	Info,
	Content,
	ProfilePic,
	Square,
	Social
} from '../../styles/components/AboutMe'

import { AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import Title from '../Title'

export default function AboutMe() {
	return (
		<Container>
			<Title title="About Me" shadow="About" />

			<Content>
				<ProfilePic>
					<img src="/profile.jpg" />
					<Square></Square>
				</ProfilePic>

				<Info>
					<h1>
						My name is <span>Lívia Belizário Rocha</span>
					</h1>
					<p>
						I'm passionate about Web Development. Started
						programming at the age of 17. By the age of 18, I
						discoved React and completely fell in love with it. I
						also love backend, especially NodeJs and Django! My goal
						in life is to become an excellent professional, so that
						I can ensure a nice and comfortable life for me and my
						family :)
					</p>
					<h2>Email</h2>
					<span>liviabelirocha@outlook.com</span>
					<h2>Education</h2>
					<span>Federal University of Ceará</span>

					<Social>
						<a
							href="https://www.instagram.com/liviabelirocha/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineInstagram size="2em" />
						</a>
						<a
							href="https://www.linkedin.com/in/lívia-belizário-92997b162/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn size="2em" />
						</a>
					</Social>
				</Info>
			</Content>
		</Container>
	)
}

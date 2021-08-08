import {
	AiFillGithub,
	AiOutlineInstagram,
	AiOutlineCopyrightCircle,
	AiFillHeart
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import { Container, Icons, Design } from '../styles/components/Footer'

export default function Footer() {
	return (
		<Container>
			<Icons>
				<a
					href="https://www.instagram.com/liviabelirocha/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineInstagram size="2em" />
				</a>
				<a
					href="https://github.com/liviabelirocha"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillGithub size="2em" />
				</a>
				<a
					href="https://www.linkedin.com/in/lívia-belizário-92997b162/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedinIn size="2em" />
				</a>
			</Icons>
			<p>
				Copyright <AiOutlineCopyrightCircle /> Lívia Belizário Rocha
			</p>
			<Design>
				Design made with &nbsp; <AiFillHeart color="red" /> &nbsp; by
				&nbsp;
				<a
					href="https://www.behance.net/dominicpersaud"
					target="_blank"
					rel="noopener noreferrer"
				>
					Dominic Persaud
				</a>
			</Design>
		</Container>
	)
}

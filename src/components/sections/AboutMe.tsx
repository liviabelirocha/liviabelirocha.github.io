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

import useTranslation from '../../hooks/useTranslation'

import Title from '../Title'

export default function AboutMe() {
	const { t } = useTranslation()

	return (
		<Container>
			<Title title={t('aboutTitle')} shadow={t('aboutSubtitle')} />

			<Content>
				<ProfilePic>
					<img src="/profile.jpg" />
					<Square></Square>
				</ProfilePic>

				<Info>
					<h1>
						{t('hello')} <span>Lívia Belizário Rocha</span>
					</h1>
					<p>{t('about')}</p>
					<h2>Email</h2>
					<span>liviabelirocha@outlook.com</span>
					<h2>{t('ed')}</h2>
					<span>{t('ufc')}</span>

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

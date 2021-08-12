import { useRouter } from 'next/router'
import Head from 'next/head'

import useTranslation from '../hooks/useTranslation'

import {
	WholePage,
	Container,
	Content,
	Button
} from '../styles/pages/Custom404'

import Footer from '../components/Footer'

import Robot404 from '../assets/robot404.svg'

export default function Custom404() {
	const { t } = useTranslation()
	const router = useRouter()

	return (
		<>
			<Head>
				<title>404 - Página não encontrada</title>
			</Head>
			<WholePage>
				<Container>
					<Robot404 />
					<Content>
						<h2>{t('lost')}</h2>
						<h1>404</h1>
						<p>{t('cantFind')}</p>
						<Button onClick={() => router.push('/')}>
							{t('back')}
						</Button>
					</Content>
				</Container>
				<Footer />
			</WholePage>
		</>
	)
}

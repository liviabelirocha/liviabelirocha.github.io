import {
	DiGithubBadge,
	DiMongodb,
	DiMysql,
	DiNodejsSmall,
	DiReact
} from 'react-icons/di'
import { IoLogoVue } from 'react-icons/io5'
import { FaGitAlt } from 'react-icons/fa'
import { AiOutlineGitlab } from 'react-icons/ai'
import {
	SiElixir,
	SiFlask,
	SiLua,
	SiPostgresql,
	SiTypescript
} from 'react-icons/si'

import useTranslation from '../../hooks/useTranslation'

import { Container } from '../../styles/components/Skills'

import Title from '../Title'
import SkillSection from '../SkillSection'

export default function Skills() {
	const { t } = useTranslation()

	const skills = [
		{
			key: 1,
			title: t('wd'),
			skills: [
				{
					name: 'Django'
				},
				{
					icon: DiNodejsSmall,
					name: 'NodeJs'
				},
				{
					name: 'Express.js'
				},
				{
					icon: IoLogoVue,
					name: 'VueJs'
				},
				{
					icon: DiReact,
					name: 'React'
				},
				{
					icon: DiReact,
					name: 'React Native'
				},
				{
					icon: SiTypescript,
					name: 'Typescript'
				}
			]
		},
		{
			key: 2,
			title: t('vc'),
			skills: [
				{
					icon: FaGitAlt,
					name: 'Git'
				},
				{
					icon: DiGithubBadge,
					name: 'Github'
				},
				{
					icon: AiOutlineGitlab,
					name: 'Gitlab'
				}
			]
		},
		{
			key: 3,
			title: t('db'),
			skills: [
				{
					icon: DiMongodb,
					name: 'MongoDb'
				},
				{
					icon: DiMysql,
					name: 'MySQL'
				},
				{
					icon: SiPostgresql,
					name: 'PostgreSQL'
				}
			]
		},
		{
			key: 4,
			title: t('s'),
			skills: [
				{
					icon: SiElixir,
					name: 'Elixir'
				},
				{
					icon: SiLua,
					name: 'Lua'
				},
				{
					icon: SiFlask,
					name: 'Flask'
				}
			]
		}
	]

	return (
		<Container>
			<Title title={t('skillsTitle')} shadow={t('skillsSubtitle')} />
			{skills.map(skill => (
				<SkillSection
					key={skill.key}
					title={skill.title}
					skills={skill.skills}
				/>
			))}
		</Container>
	)
}

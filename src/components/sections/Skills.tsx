import {
	DiDjango,
	DiGithubBadge,
	DiMongodb,
	DiMysql,
	DiNodejsSmall,
	DiReact
} from 'react-icons/di'
import { IoLogoVue } from 'react-icons/io5'
import { FaAws, FaGitAlt } from 'react-icons/fa'
import { AiOutlineGitlab } from 'react-icons/ai'
import { SiElixir, SiFlask, SiLua, SiPostgresql } from 'react-icons/si'

import { Container } from '../../styles/components/Skills'

import Title from '../Title'
import SkillSection from '../SkillSection'

const skills = [
	{
		key: 1,
		title: 'Web Development',
		skills: [
			{
				icon: DiDjango
			},
			{
				icon: DiNodejsSmall,
				name: 'NodeJs'
			},
			{
				name: 'Express.JS'
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
			}
		]
	},
	{
		key: 2,
		title: 'Version Control',
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
		title: 'Databases',
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
		title: 'Studying',
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

export default function Skills() {
	return (
		<Container>
			<Title title="Skills" shadow="Skills" />
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

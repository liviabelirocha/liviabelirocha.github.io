import { DiMongodb, DiMysql, DiNodejsSmall, DiReact } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
import {
	SiDjango,
	SiExpress,
	SiPostgresql,
	SiSolidity,
	SiSupabase,
	SiTypescript,
} from "react-icons/si";

import useTranslation from "../../hooks/useTranslation";

import { Container } from "../../styles/components/Skills";

import Title from "../Title";
import SkillSection from "../SkillSection";
import { FaDocker } from "react-icons/fa";

export default function Skills() {
	const { t } = useTranslation();

	const skills = [
		{
			key: 1,
			title: t("wd"),
			skills: [
				{ icon: SiDjango, name: "Django" },
				{ icon: DiNodejsSmall, name: "NodeJs" },
				{ icon: SiExpress, name: "Express.js" },
				{ icon: IoLogoVue, name: "VueJs" },
				{ icon: DiReact, name: "React" },
				{ icon: DiReact, name: "React Native" },
				{ icon: SiTypescript, name: "Typescript" },
			],
		},
		{
			key: 2,
			title: t("db"),
			skills: [
				{ icon: DiMongodb, name: "MongoDb" },
				{ icon: DiMysql, name: "MySQL" },
				{ icon: SiPostgresql, name: "PostgreSQL" },
				{ icon: SiSupabase, name: "Supabase" },
			],
		},
		{
			key: 3,
			title: t("s"),
			skills: [
				{ icon: SiSolidity, name: "Solidity" },
				{ icon: FaDocker, name: "Docker" },
			],
		},
	];

	return (
		<Container>
			<Title title={t("skillsTitle")} shadow={t("skillsSubtitle")} />
			{skills.map((skill) => (
				<SkillSection
					key={skill.key}
					title={skill.title}
					skills={skill.skills}
				/>
			))}
		</Container>
	);
}

import { Container, Content } from "../../styles/components/Projects";

import useTranslation from "../../hooks/useTranslation";

import ProjectCard from "../ProjectCard";
import Title from "../Title";

import { GiWheat, GiLibertyWing, GiMusicalNotes } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";

export default function Projects() {
	const { t } = useTranslation();

	const projects = [
		{
			key: 1,
			title: "WheatTabs",
			description: t("wt"),
			icon: GiWheat,
			link: "https://wheattabs.herokuapp.com",
		},
		{
			key: 2,
			title: "Plant Daddy",
			description: t("pd"),
			icon: RiPlantLine,
			link: "https://github.com/plant-daddy",
		},
		{
			key: 3,
			title: "Dominic Persaud Portfolio",
			description: t("dp"),
			icon: CgScreen,
			link: "https://github.com/liviabelirocha/dp-portfolio",
		},
		{
			key: 4,
			title: "CupkakKe Bot",
			description: t("cupkakke"),
			icon: GiMusicalNotes,
			link: "https://github.com/liviabelirocha/cupkakKe-bot",
		},
	];

	return (
		<Container>
			<Title title={t("projectsTitle")} shadow={t("projectsSubtitle")} />
			<Content>
				{projects.map((project) => {
					return (
						<ProjectCard
							title={project.title}
							description={project.description}
							icon={project.icon}
							key={project.key}
							link={project.link}
						/>
					);
				})}
			</Content>
		</Container>
	);
}

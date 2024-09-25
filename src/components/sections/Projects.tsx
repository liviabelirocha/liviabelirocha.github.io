import { Container, Content } from "../../styles/components/Projects";

import useTranslation from "../../hooks/useTranslation";

import ProjectCard from "../ProjectCard";
import Title from "../Title";

import { FaCalculator } from "react-icons/fa";
import { GiBeerBottle, GiMusicalNotes, GiWheat } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";

export default function Projects() {
	const { t } = useTranslation();

	const projects = [
		{
			key: 1,
			title: "Plant Daddy",
			description: t("pd"),
			icon: RiPlantLine,
			link: "https://github.com/plant-daddy",
		},
		{
			key: 2,
			title: "4count",
			description: t("4count"),
			icon: FaCalculator,
			link: "https://github.com/liviabelirocha/4count",
		},
		{
			key: 3,
			title: "One Million Beers",
			description: t("oneMillionBeers"),
			icon: GiBeerBottle,
			link: "https://github.com/liviabelirocha/one-million-beers",
		},
		{
			key: 4,
			title: "WheatTabs (frontend)",
			description: t("wt"),
			icon: GiWheat,
			link: "https://github.com/liviabelirocha/tabs-frontend/",
		},
		{
			key: 5,
			title: "WheatTabs (backend)",
			description: t("wt"),
			icon: GiWheat,
			link: "https://github.com/liviabelirocha/tabs-backend/",
		},
		{
			key: 6,
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

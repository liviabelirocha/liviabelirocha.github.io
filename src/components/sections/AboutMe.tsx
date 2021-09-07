import {
	Container,
	Info,
	Content,
	ProfilePic,
	Square,
} from "../../styles/components/AboutMe";

import useTranslation from "../../hooks/useTranslation";

import Title from "../Title";

export default function AboutMe() {
	const { t } = useTranslation();

	return (
		<Container>
			<Title title={t("aboutTitle")} shadow={t("aboutSubtitle")} />

			<Content>
				<ProfilePic>
					<img src="/profile.jpg" />
					<Square></Square>
				</ProfilePic>

				<Info>
					<h1>
						{t("myName")} <span>Lívia Belizário Rocha</span>
					</h1>
					<p>{t("about")}</p>
					<h2>Email</h2>
					<span>liviabelirocha@outlook.com</span>
					<h2>{t("ed")}</h2>
					<span>{t("ufc")}</span>
				</Info>
			</Content>
		</Container>
	);
}

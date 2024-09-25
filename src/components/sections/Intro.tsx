import { Container, Flags } from "../../styles/components/Intro";

import useTranslation from "../../hooks/useTranslation";

import BrFlag from "../../assets/br.svg";
import EnFlag from "../../assets/en.svg";
import GithubLogo from "../../assets/github2.svg";
import Logo from "../../assets/initialLogo.svg";
import { Locale } from "../../contexts/LanguageContext";

export default function Intro() {
	const { t, setLocale } = useTranslation();

	function handleLocaleChange(language: string) {
		if (!window) return;

		localStorage.setItem("lang", language);
		setLocale(language as Locale);
	}

	return (
		<Container>
			<a
				href="https://github.com/liviabelirocha/liviabelirocha.github.io"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GithubLogo className="github-logo" />
			</a>
			<Logo className="pc-logo" />
			<div className="texts">
				<p>{t("hello")}</p>
				<b>Lívia Belizário</b>
				<small>{t("dev")}</small>
			</div>

			<Flags>
				<BrFlag
					className="flag"
					onClick={() => handleLocaleChange("pt")}
				/>
				<EnFlag
					className="flag"
					onClick={() => handleLocaleChange("en")}
				/>
			</Flags>
		</Container>
	);
}

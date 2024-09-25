import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import { langStrings } from "../lib/strings";

export default function useTranslation() {
	const { locale, setLocale } = useContext(LanguageContext);

	const t = (
		key: keyof (typeof langStrings)["en"] | keyof (typeof langStrings)["pt"]
	) => langStrings[locale][key] || "";

	return { t, setLocale };
}

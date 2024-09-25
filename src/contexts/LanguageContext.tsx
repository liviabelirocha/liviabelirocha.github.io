import { createContext, ReactNode, useEffect, useState } from "react";

export type Locale = "pt" | "en";

type LanguageContextType = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
};

export const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>("en");

	useEffect(() => {
		if (!window) return;
		const language = (localStorage.getItem("lang") || locale) as Locale;
		setLocale(language);
	}, [locale]);

	return (
		<LanguageContext.Provider value={{ locale, setLocale }}>
			{children}
		</LanguageContext.Provider>
	);
}

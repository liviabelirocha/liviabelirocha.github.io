import { useContext } from 'react'

import {
	LanguageContext,
	defaultLocale,
	locales
} from '../contexts/LanguageContext'
import { langStrings } from '../lib/strings'

export default function useTranslation() {
	const [locale, setLocale] = useContext(LanguageContext)

	function t(key) {
		if (!langStrings[locale][key])
			console.warn(`No string '${key}' for locale '${locale}'`)

		return langStrings[locale][key] || langStrings[defaultLocale][key] || ''
	}

	return { t, locale, setLocale, locales }
}

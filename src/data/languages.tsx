import { formatDistanceToNow, Locale } from 'date-fns'

import enUS from './messages/en-US.json'
import nlNL from './messages/nl-NL.json'

const languages = [
  {
    label: '🇳🇿 English',
    locale: 'en-US',
  },
  {
    label: '🇳🇱 Nederlands',
    locale: 'nl-NL',
  },
]

const defaultLocale = 'en-US'

const messages: Record<string, Record<string, string>> = {
  'en-US': enUS as Record<string, string>,
  'nl-NL': nlNL as Record<string, string>,
}

const formatLocales: Record<string, Locale> = {
  'en-US': require('date-fns/locale/en-GB'),
  'nl-NL': require('date-fns/locale/nl'),
}

const getMessage: (locale: string) => (message: string) => string = (
  locale: string
) => {
  return (message: string): string => messages[locale][message]
}
const formatDateDistanceToNow = (locale: string, date: Date) => {
  const msgs = getMessage(locale)
  return `${msgs('LAST_UPDATED')} ${formatDistanceToNow(date, {
    locale: formatLocales[locale],
  })} ${msgs('AGO')}`
}

export { languages, defaultLocale, getMessage, formatDateDistanceToNow }

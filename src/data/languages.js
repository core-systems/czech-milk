const languages = [
  { key: 'ar', label: 'Arabic',     dir: 'rtl', default: false },
  { key: 'zh', label: 'Chinese',    dir: 'ltr', default: false },
  { key: 'cs', label: 'Czech',      dir: 'ltr', default: false },
  { key: 'en', label: 'English',    dir: 'ltr', default: true },
  { key: 'vi', label: 'Vietnamese', dir: 'ltr', default: false },
]

const langKeys = languages.map(l => l.key)
const defaultLangKey = languages.filter(x => x.default).map(l => l.key)

module.exports = {
  langKeys: langKeys,
  languages: languages,
  langs: langKeys,
  defaultLangKey: `${defaultLangKey}`,
}

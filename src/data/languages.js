const languages = [
  { key: 'ar', label: 'Arabic', default: false },
  { key: 'zh', label: 'Chinese', default: false },
  { key: 'cs', label: 'Czech', default: false },
  { key: 'en', label: 'English', default: true },
  { key: 'vi', label: 'Vietnamese', default: false },
]

const langKeys = languages.map(l => l.key)
const defaultLangKey = languages.filter(x => x.default).map(l => l.key)

module.exports = {
  langKeys: langKeys,
  languages: languages,
  langs: langKeys,
  defaultLangKey: `${defaultLangKey}`,
}

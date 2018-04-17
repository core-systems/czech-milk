const languages = [
  { key: 'ar', label: 'Arabic',     dir: 'rtl', default: false, flagIconCode: 'ly' },
  { key: 'zh', label: 'Chinese',    dir: 'ltr', default: false, flagIconCode: 'cn' },
  { key: 'cs', label: 'Czech',      dir: 'ltr', default: false, flagIconCode: 'cz' },
  { key: 'en', label: 'English',    dir: 'ltr', default: true , flagIconCode: 'gb' },
  { key: 'vi', label: 'Vietnamese', dir: 'ltr', default: false, flagIconCode: 'vn' },
]

const langKeys = languages.map(l => l.key)
const defaultLangKey = languages.filter(x => x.default).map(l => l.key)

module.exports = {
  langKeys: langKeys,
  languages: languages,
  langs: langKeys,
  defaultLangKey: `${defaultLangKey}`,
}

const languages = [
  { key: 'ar', label: 'Arabic',     dir: 'rtl', default: false, flagIconCode: 'ly', disabled: true },
  { key: 'zh', label: 'Chinese',    dir: 'ltr', default: false, flagIconCode: 'cn', disabled: true },
  { key: 'cs', label: 'Czech',      dir: 'ltr', default: false, flagIconCode: 'cz', disabled: false },
  { key: 'en', label: 'English',    dir: 'ltr', default: true , flagIconCode: 'gb', disabled: false },
  { key: 'fr', label: 'French',     dir: 'ltr', default: false, flagIconCode: 'fr', disabled: false },
  { key: 'vi', label: 'Vietnamese', dir: 'ltr', default: false, flagIconCode: 'vn', disabled: true },
]

const enableLanguages = languages.filter(x => !x.disabled)

const langKeys = enableLanguages.map(l => l.key)
const defaultLangKey = enableLanguages.filter(x => x.default).map(l => l.key)

module.exports = {
  langKeys: langKeys,
  languages: enableLanguages,
  langs: langKeys,
  defaultLangKey: `${defaultLangKey}`,
}

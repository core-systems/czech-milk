const languages = [
  { key: 'en', label: 'English', default: true },
  { key: 'pt', label: 'PT..', default: false },
]

const langKeys = languages.map(l => l.key)
const defaultLangKey = languages.filter(x => x.default).map(l => l.key)

module.exports = {
  langKeys: langKeys,
  languages: languages,
  langs: langKeys,
  defaultLangKey: 'en'
};

/*
module.exports = {
  langs: ['en', 'pt'],
  defaultLangKey: 'en'
};
*/

import en from './en.json' assert { type: 'json' };
import es from './es.json' assert { type: 'json' };

const defaultLanguage = 'en';
const availableLanguages = { en, es };

const loader = (language) => {
  return availableLanguages[language] || availableLanguages[defaultLanguage];
};

export default loader;

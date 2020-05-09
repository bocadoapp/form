import es from './es.json'
import ca from './ca.json'

const langs = ['ca', 'es']

export const LS_LANG_KEY = 'bocado_lang'

export const getLocale = () => {
  const urlLang = window.location.pathname.split('/').filter(l => l !== '')[0]
  
  if (urlLang && langs.includes(urlLang)) {
    return urlLang
  }

  const lsLang = window.localStorage.getItem(LS_LANG_KEY)
  if (lsLang && langs.includes(lsLang)) {
    return lsLang
  }

  return 'ca'
}

export default {
  es,
  ca
}
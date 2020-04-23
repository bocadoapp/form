import es from './es'
import ca from './ca'

const langs = ['ca', 'es']

export const getLang = () => {
  const urlLang = window.location.pathname.split('/').filter(l => l !== '')[0]
  
  if (urlLang && langs.includes(urlLang)) {
    return urlLang
  }

  const lsLang = window.localStorage.getItem('lang')
  if (lsLang && langs.includes(lsLang)) {
    return lsLang
  }

  return 'ca'
}

export default {
  es,
  ca
}
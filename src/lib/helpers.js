export const LS_KEY = 'bocado_user'
const btnSteps = [
  {},
  { disabled: false, styled: 'gradient', label: 'step_btn_general', icon: 'fas fa-info-circle' },
  { disabled: true, styled: 'gradient', label: 'step_btn_ingredients', icon: 'fas fa-carrot', disabledMessage: 'step_ingredients_disabled' },
  { disabled: true, styled: 'gradient', label: 'step_btn_passos', icon: 'fas fa-list-ol', disabledMessage: 'step_passos_disabled' },
  { disabled: false, styled: 'success', label: 'step_btn_save', icon: 'far fa-save', disabledMessage: 'step_guardar_disabled' }
]

export const getBtnData = step =>  btnSteps[step]

export const getInitialStep = () => Number(window.location.hash.split('/').find(e => !isNaN(Number(e)))) || 1

export const getUserFromLS = () => {
  try {
    const lsUser = JSON.parse(localStorage.getItem(LS_KEY))

    if (!lsUser) {
      return null
    }

    return lsUser
  } catch (err) {
    return null
  }
}

export const r = () => Math.floor(Math.random() * (50 - 1 + 1) + 1)
export const emojis = ['🥕', '🍅', '🥬', '🌽', '🍆', '🥭', '🥥', '🥝', '🍓', '🍒', '🍑', '🍐', '🍏', '🍎', '🍍', '🍌', '🍋', '🍊', '🍉', '🍈', '🍇']
export const random = (min, max) => Math.random() * (max - min + 1) + min

export const ERRORS = {
  11000: 'errors.duplicated.user'
}

export const getErrorMessage = error => {
  if (error.graphQLErrors && error.graphQLErrors.length) {    
    return error.graphQLErrors
      .map(err => {
        const { message, extensions } = err        
        return ERRORS[extensions.exception.code] || extensions.exception.errmsg || message
      })
      .join('<br />')
  }

  if (error.message && error.message !== '') {
    return error.message
  }

  return error.toString()
}
const LS_KEY = 'bocado_user'
const btnSteps = [
  {},
  { disabled: false, styled: 'gradient', label: 'Informació', icon: 'fas fa-info-circle' },
  { disabled: false, styled: 'gradient', label: 'Ingredients', icon: 'fas fa-carrot' },
  { disabled: true, styled: 'gradient', label: 'Passos', icon: 'fas fa-list-ol', disabledMessage: 'Has d\'afegir minim 1 ingredient 🙏' },
  { disabled: false, styled: 'success', label: 'Guardar', icon: 'far fa-save', disabledMessage: 'Has d\'afegir minim 1 pas 🙏' }
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
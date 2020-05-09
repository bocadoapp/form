const LS_KEY = 'bocado_user'
const btnSteps = [
  {},
  { disabled: false, styled: 'gradient', label: 'step.btn.general', icon: 'fas fa-info-circle' },
  { disabled: false, styled: 'gradient', label: 'step.btn.ingredients', icon: 'fas fa-carrot' },
  { disabled: true, styled: 'gradient', label: 'step.btn.passos', icon: 'fas fa-list-ol', disabledMessage: 'step.passos.disabled' },
  { disabled: false, styled: 'success', label: 'step.btn.save', icon: 'far fa-save', disabledMessage: 'step.guardar.disabled' }
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

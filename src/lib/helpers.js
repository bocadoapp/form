const LS_KEY = 'bocado_user'

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
import React, { useContext, createContext, useReducer } from 'react'
import { LS_KEY, getBtnData, getInitialStep } from '../lib/helpers'
import { LS_LANG_KEY, getLocale } from '../locale'

const Context = createContext()
const initialStep = getInitialStep()
const initialState = {
  step: initialStep,
  numSteps: 4,
  user: null,
  btn: getBtnData(initialStep),
  triggerAnimation: false,
  points: 0,
  locale: getLocale(),
  status: {
    error: false,
    text: null
  }
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_STATUS':
      return { ...state, status: { ...state.status, ...action.status } }
    case 'SET_STEP':
      return {
        ...state,
        step: action.step,
        btn: getBtnData(action.step)
      }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_BUTTON':      
      return { ...state, btn: { ...state.btn, ...action.btn } }
    case 'TOGGLE_ANI':
      return { ...state, triggerAnimation: action.value }
    case 'SET_POINTS': {
      const triggerAnimation = action.withAnimation ? !state.withAnimation : state.withAnimation
      return { ...state, points: action.points, triggerAnimation }
    }
    case 'SET_LOCALE':
      return { ...state, locale: action.locale }
    default:
      return {...state}
  }
}

export function Provider ({ children }) {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export function useStore () {
  const [state, dispatch] = useContext(Context)
  const setLocale = locale => {
    window.localStorage.setItem(LS_LANG_KEY, locale)
    dispatch({ type: 'SET_LOCALE', locale })
  }
  const setStatus = status => dispatch({ type: 'SET_STATUS', status })
  const setStep = step => dispatch({ type: 'SET_STEP', step })
  const setUser = user => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(user))
    dispatch({ type: 'SET_USER', user })
  }
  const setBtn = btn => dispatch({ type: 'SET_BUTTON', btn })
  const setPoints = (points, withAnimation = true) => dispatch({ type: 'SET_POINTS', points, withAnimation })
  const toggleAnimation = (value, cb) => {
    dispatch({ type: 'TOGGLE_ANI', value })
    if (cb) cb()
  }
  return {...state, setStatus, setLocale, setStep, setUser, setBtn, toggleAnimation, setPoints }
}

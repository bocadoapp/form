import React, { useContext, createContext, useReducer } from 'react'
import { getBtnData, getInitialStep } from '../lib/helpers'

const Context = createContext()
const initialStep = getInitialStep()
const initialState = {
  step: initialStep,
  numSteps: 4,
  user: null,
  btn: getBtnData(initialStep),
  triggerAnimation: false,
  points: 0
}

function reducer (state = initialState, action) {
  switch (action.type) {
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
  const setStep = step => dispatch({ type: 'SET_STEP', step })
  const setUser = user => dispatch({ type: 'SET_USER', user })
  const setBtn = btn => dispatch({ type: 'SET_BUTTON', btn })
  const setPoints = (points, withAnimation = true) => dispatch({ type: 'SET_POINTS', points, withAnimation })
  const toggleAnimation = (value, cb) => {
    dispatch({ type: 'TOGGLE_ANI', value })
    if (cb) cb()
  }
  return {...state, setStep, setUser, setBtn, toggleAnimation, setPoints }
}

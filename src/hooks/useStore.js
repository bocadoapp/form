import React, { useContext, createContext, useReducer } from 'react'

const Context = createContext()

const initialStep = () => {
  const step = Number(window.location.hash.split('/').find(e => !isNaN(Number(e))))  
  return step || 1
}

const initialState = {
  step: initialStep(),
  numSteps: 4,
  user: null
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_STEP':
      return {...state, step: action.step}
    case 'SET_USER':
      return { ...state, user: action.user } 
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
  return {...state, setStep, setUser }
}

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useHistory } from 'react-router-dom'

import { useStore } from './hooks/useStore'
import Layout from './components/Layout'
import General from './components/steps/General'
import Final from './components/steps/Final'
import Intro from './components/steps/Intro'
import Ingredients from './components/steps/Ingredients'
import Passos from './components/steps/Passos'
import Home from './components/Home'

function App() {
  const { setStep } = useStore()
  const history = useHistory()
  const exitBeforeEnter = history.action === 'PUSH'
  
  history.listen((location, action) => {    
    const step = Number(location.pathname.split('/').pop())
    if (step && !isNaN(step)) {
      setStep(step)
    }
  })

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter={exitBeforeEnter}>
        <Switch location={history.location} key={history.location.pathname}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/:lang' exact>
            <Home />
          </Route>
          <Route path='/:lang/1' exact> 
            <Intro />
          </Route>
          <Route path='/:lang/2' exact> 
            <General />
          </Route>
          <Route path='/:lang/3' exact> 
            <Ingredients />
          </Route>
          <Route path='/:lang/4' exact> 
            <Passos />
          </Route>
          <Route path='/:lang/5' exact> 
            <Final />
          </Route>          
        </Switch>
      </AnimatePresence>
    </Layout>
  )
}

export default App

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useHistory } from 'react-router-dom'

import Layout from './components/Layout'
import General from './components/steps/General'
import Final from './components/steps/Final'
import Intro from './components/steps/Intro'
import Ingredients from './components/steps/Ingredients'
import Pasos from './components/steps/Pasos'
import Home from './components/Home'

function App() {
  const history = useHistory()
  const exitBeforeEnter = history.action === 'PUSH'
  
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
            <Pasos />
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

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, Redirect, useLocation, useParams } from 'react-router-dom'

import Layout from './components/Layout'
import General from './components/steps/General'
import Final from './components/steps/Final'
import Intro from './components/steps/Intro'
import Ingredients from './components/steps/Ingredients'

function App() {
  const location = useLocation()    

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Redirect from='/' to='/ca/step/1' />
          </Route>          
          <Route path='/ca' exact>
            <Redirect from='/' to='/ca/step/1' />
          </Route>
          <Route path='/es' exact>
            <Redirect from='/' to='/es/step/1' />
          </Route>          
          <Route path='/:lang/step/1' exact> 
            <Intro />
          </Route>
          <Route path='/:lang/step/2' exact> 
            <General />
          </Route>
          <Route path='/:lang/step/3' exact> 
            <Ingredients />
          </Route>
          <Route path='/:lang/step/4' exact> 
            <Final />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  )
}

export default App

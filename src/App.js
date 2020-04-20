import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, Redirect, useLocation, useParams } from 'react-router-dom'

import Layout from './components/Layout'
import General from './components/steps/General'
import Final from './components/steps/Final'
import Intro from './components/steps/Intro'
import Ingredients from './components/steps/Ingredients'

const steps = [Intro, General, Ingredients, Final]

function StepController (props) {
  const { step } = useParams()
  const Step = steps[Number(step) - 1]
  return (
    <div>
      <Step />
    </div>
  )
}

function App() {
  const location = useLocation()  

  return (
    <Layout>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Redirect from='/' to='/step/1' />
          </Route>
          <Route path='/step/:step'> 
            <StepController />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  )
}

export default App

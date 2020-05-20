import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { HashRouter as Router } from 'react-router-dom'

import App from './App'
import { Provider as StoreProvider } from './hooks/useStore'
import { Provider as GtmProvider } from './hooks/useGtm'
import Translations from './components/Translations'

import '@fortawesome/fontawesome-free/css/all.css';
import './styles/main.css'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: `${process.env.REACT_APP_API}/graphql`,
    // uri: 'https://bocado-api.herokuapp.com/graphql'
  })
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StoreProvider>
        <GtmProvider>
          <Translations>
            <Router>
              <App />
            </Router>
          </Translations>
        </GtmProvider>
      </StoreProvider>      
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

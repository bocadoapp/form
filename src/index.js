import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { HashRouter as Router } from 'react-router-dom'

import App from './App'
import { Provider } from './hooks/useStore'
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
      <Provider>
        <Translations>
          <Router>
            <App />
          </Router>
        </Translations>
      </Provider>      
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

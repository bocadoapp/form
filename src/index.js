import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { Provider } from './hooks/useStore'

import './styles/main.css'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    // uri: 'http://localhost:4000/graphql',
    uri: 'https://bocado-api.herokuapp.com/graphql'
  })
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>      
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

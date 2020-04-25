import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { HashRouter as Router } from 'react-router-dom'
import { IntlProvider } from 'react-intl';
import messages, { getLang } from './locale'

import App from './App'
import { Provider } from './hooks/useStore'

import './styles/main.css'

const locale = getLang()
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
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Provider>
          <Router>
            <App />
          </Router>
        </Provider>      
      </IntlProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

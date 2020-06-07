import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import client from './apollo';
import App from './Components/App';
import reset from 'styled-reset';
import { createGlobalStyle } from './typed-components';

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
${reset}
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

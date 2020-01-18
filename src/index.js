<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

import { App } from "./App";
=======
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'
import { App } from './App'
>>>>>>> 0fac051efc47806907b67fba850277a9580c9a26

const client = new ApolloClient({
  uri: "https://instapet-server-l2fchxyq5.now.sh/graphql",
  request: operation => {
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: {
        authorization
      }
    });
  },
  onError: error => {
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  }
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
<<<<<<< HEAD
  document.getElementById("app")
);
=======
  document.getElementById('app')
)
>>>>>>> 0fac051efc47806907b67fba850277a9580c9a26

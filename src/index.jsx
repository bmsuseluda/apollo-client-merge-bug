/*** APP ***/
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

import { link } from "./link.js";
import "./index.css";

const ALL_PEOPLE = gql`
  query people {
    people {
      ...PersonFromType
      ...PersonFromInterface
    }
  }

  fragment PersonFromType on ExtendedPerson {
    id
  }

  fragment PersonFromInterface on Person {
    id
    name
  }
`;

function App() {
  const { loading, data } = useQuery(ALL_PEOPLE);

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
      <p>
        This application can be used to demonstrate an error in Apollo Client.
      </p>
      <h2>Names</h2>
      {loading ? <p>Loading…</p> : <ul>{JSON.stringify(data)}</ul>}
    </main>
  );
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

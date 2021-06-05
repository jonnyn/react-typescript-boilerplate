/* eslint-disable no-console */
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  ApolloLink,
  InMemoryCache,
  gql,
  WatchQueryOptions,
  QueryOptions,
  MutationOptions,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { getIdToken } from './auth'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})
const authLink = setContext(async (_, { headers }) => {
  const token = await getIdToken()
  return token
    ? { headers: { ...headers, authorization: `Bearer ${token}` } }
    : { headers }
})
const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
})

const link = ApolloLink.from([errorLink, authLink, httpLink])

const cache = new InMemoryCache({
  addTypename: false,
})

type DefaultOptions = {
  watchQuery?: Partial<WatchQueryOptions>
  query?: Partial<QueryOptions>
  mutate?: Partial<MutationOptions>
}

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
})

const Provider = ({ children }: { children: any }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export { gql, client }
export default Provider

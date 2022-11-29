import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const client = new ApolloClient({
  uri: 'http://82.165.206.170/graphql/public',
  cache: new InMemoryCache()
});

export default client;
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const getMicroSiteId = () => process.env.microSiteId || '0';

export type AppAuthenticator = {
  authToken: string;
  platform: string;
  appVersion: string;
};

export function getApolloClient(msToken: string | null | undefined) {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: msToken,
      'x-rz-micro-site': getMicroSiteId().toString(),
    },
  }));

  const httpLink = new HttpLink({
    uri: `${process.env.brandsApiUrl}/graphql`,
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

interface MutationError {
  message: string;
}

const DEFAULT_ERROR_MESSAGE = 'Opps... Something went wrong';

export const getMutationError = (error: any): MutationError => {
  if (error) return error.networkError.result.errors[0];

  return {
    message: DEFAULT_ERROR_MESSAGE,
  };
};

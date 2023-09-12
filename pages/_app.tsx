import '../src/styles/app.styles.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useEffect, useState } from 'react';
import { getApolloClient } from '../vendor/utils/app-api';
import MicroSiteTokenMissing from '../vendor/components/layout/MicroSiteTokenMissing';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [msToken, setMsToken] = useState('');
  useEffect(() => {
    if (!msToken) {
      const microSiteToken = window.location.href
        .split('?')[1]
        ?.split('&')
        .filter(item => item.includes('mst='))[0]
        ?.split('=')[1];
      if (microSiteToken) {
        setMsToken(`Bearer ${microSiteToken}`);
      }
    }
  }, [msToken, setMsToken]);
  return !msToken ? (
    <MicroSiteTokenMissing />
  ) : (
    <ApolloProvider client={getApolloClient(msToken)}>
      <Component {...{ ...pageProps, msToken }} />;
    </ApolloProvider>
  );
};
export default MyApp;

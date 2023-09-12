import nextBase64 from 'next-base64';
import { AppAuthenticator } from './app-api';

export const getURLParams = () => {
  const url = decodeURI(window.location.href);
  return url.split('?').map(param => {
    const item = param.split('=');
    return {
      key: item[0],
      value: item[1],
    };
  });
};

export const getAppAuthentication = (): AppAuthenticator | undefined => {
  const params = getURLParams();
  const token = params.filter(({ key }) => key === 'mst')[0]?.value;
  if (!token) {
    return undefined;
  }
  // TODO: cypher the data
  // const secret = nextBase64.decode(token);
  // const message = CryptoJS.AES.decrypt(
  //   secret,
  //   'boost:microSite:secret',
  // ).toString();
  const [authToken, platform, appVersion] = nextBase64.decode(token).split(':');
  return {
    authToken,
    platform,
    appVersion,
  };
};

type AppWindowType = Window &
  typeof globalThis & {
    ReactNativeWebView: {
      postMessage: (
        message: string,
        targetOrigin: string,
        transfer?: Transferable[] | undefined,
      ) => void;
    };
  };
export const sendMessageToApp = (action: string, params?: object) => {
  const AppWindow = window as AppWindowType;
  const data = JSON.stringify(params ? { action, ...params } : { action });
  AppWindow.ReactNativeWebView?.postMessage(data, '*');
};

import { FC } from 'react';
import Layout from '../../layout/Layout';
import View from '../../layout/View';
import LoadingOverview from './LoadingOverview';

type LoadingScreenViewType = {
  message?: string;
  backgroundColor?: string;
  spinnerColor?: string;
};

// eslint-disable-next-line react/function-component-definition
const LoadingScreenView: FC<LoadingScreenViewType> = ({
  message,
  backgroundColor,
  spinnerColor,
}) => (
  <Layout title="Loading" backgroundColor={backgroundColor}>
    <View fill>
      <LoadingOverview color={spinnerColor} message={message} />
    </View>
  </Layout>
);

LoadingScreenView.defaultProps = {
  message: undefined,
  backgroundColor: undefined,
  spinnerColor: undefined,
};

export default LoadingScreenView;

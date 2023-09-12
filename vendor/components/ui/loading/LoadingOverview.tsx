import React, { FC } from 'react';
import { bootstrapClass, mergeStyles } from '../../../utils/code-helper';
import View from '../../layout/View';
import { AppStyles } from '../../../../src/styles/app.styles';

// bootstrap classes
const classNames = {
  loadingContent: bootstrapClass(['text-dark']),
  spinner: bootstrapClass(['spinner-border', 'border-1', 'shadow-inner']),
  message: bootstrapClass([
    'alert',
    'alert-dark',
    'mt-3',
    'px-5',
    'py-1',
    'border-0',
    'text-white',
    'shadow',
  ]),
};

// javascript element.style.[parameters]
const styles = {
  message: {
    textShadow: '1pt 1pt 1pt rgba(0,0,0,0.33)',
  },
  spinner: {
    width: '2.5rem',
    height: '2.5rem',
    ...AppStyles.textShadow,
  },
};
type LoadingOverviewType = {
  message?: string;
  color?: string;
};

// eslint-disable-next-line react/function-component-definition
const LoadingOverview: FC<LoadingOverviewType> = ({ message, color }) => {
  const spinnerStyle = color
    ? mergeStyles([styles.spinner, { color }])
    : styles.spinner;
  return (
    <View fill>
      <div className={classNames.loadingContent}>
        <div className={classNames.spinner} style={spinnerStyle} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      {message && (
        <div className={classNames.message} style={styles.message} role="alert">
          {message}
        </div>
      )}
    </View>
  );
};

LoadingOverview.defaultProps = {
  message: undefined,
  color: undefined,
};

export default LoadingOverview;

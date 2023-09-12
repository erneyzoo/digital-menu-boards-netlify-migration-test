import React from 'react';
import { bootstrapClass } from '../../utils/code-helper';

// bootstrap Classes compiler
const classNames = {
  container: bootstrapClass(['container', 'py-3', 'text-bg-dark']),
};

// javascript element.style.[parameters]
const styles = {
  h1: {
    fontStyle: 'bold',
    textShadow: '1pt 1pt 1pt rgba(40,40,40,0.33)',
  },
};

type UnauthorizedViewType = {
  children?: JSX.Element;
};

const UnauthorizedView: React.FC<UnauthorizedViewType> = ({ children }) => (
  <div className={classNames.container}>
    <h1 style={styles.h1}>UnauthorizedView Component </h1>
    {children}
  </div>
);

export default UnauthorizedView;

UnauthorizedView.defaultProps = {
  children: undefined,
};

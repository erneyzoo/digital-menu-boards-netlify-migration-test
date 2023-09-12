import React from 'react';
import { bootstrapClass } from '../../vendor/utils/code-helper';
import View from '../../vendor/components/layout/View';
import FAIcon from '../../vendor/components/ui/FAIcon'; // bootstrap Classes compiler

// bootstrap Classes compiler
const classNames = {
  container: bootstrapClass(['alert', 'alert-danger', 'm-0']),
  message: bootstrapClass([
    'overflow-scroll',
    'bg-danger-10',
    'bg-gradient',
    'text-danger',
    'fw-bolder',
    'rounded',
    'p-2',
  ]),
};

type ErrorViewType = {
  message: string;
};

const ErrorView: React.FC<ErrorViewType> = ({ message }) => (
  <View size={100} className={classNames.container}>
    <View horizontal>
      <FAIcon icon="triangle-exclamation" size={100} color="danger" shadow />
    </View>
    <View
      horizontal
      className={classNames.message}
      style={{ maxHeight: '70vh' }}
    >
      <View fill top>
        {message}
      </View>
    </View>
  </View>
);

export default ErrorView;

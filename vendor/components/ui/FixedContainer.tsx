import { FC } from 'react';
import View from '../layout/View';

type FixedContainerType = {
  children?: JSX.Element;
  width: number;
  height: number;
};

const FixedContainer: FC<FixedContainerType> = ({
  children,
  width,
  height,
}) => <View style={{ width, height }}>{children}</View>;

FixedContainer.defaultProps = {
  children: undefined,
};

export default FixedContainer;

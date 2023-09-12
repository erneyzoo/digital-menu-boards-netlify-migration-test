import { FC, ReactNode } from 'react';
import { bootstrapClass } from '../../utils/code-helper';
import classNames from '../../styles/view.module.scss';

type ViewType = {
  children?: ReactNode;
  size?: number;
  fill?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  stretch?: boolean;
  row?: boolean;
  className?: string;
  style?: object;
};

// eslint-disable-next-line react/function-component-definition
const View: FC<ViewType> = props => {
  const {
    children,
    size,
    fill,
    vertical,
    horizontal,
    left,
    right,
    top,
    bottom,
    stretch,
    row,
    className,
    style,
  } = props;
  const cssArray = [
    classNames.container,
    row ? classNames.row : classNames.col,
  ];

  // size
  if (size) {
    let res: number;
    res = size > 100 ? 100 : size;
    res = size < 0 ? 0 : res;
    cssArray.push(`size-${res}`);
  }

  if (stretch) cssArray.push(classNames.stretch);
  if (fill) cssArray.push(classNames.fill);

  if (horizontal || fill) cssArray.push(classNames.horizontal);
  if (vertical || fill) cssArray.push(classNames.vertical);

  if (left && !right)
    cssArray.push(row ? classNames.leftRow : classNames.leftCol);
  if (right && !left)
    cssArray.push(row ? classNames.rightRow : classNames.rightCol);

  if (top && !bottom)
    cssArray.push(row ? classNames.topRow : classNames.topCol);
  if (bottom && !top)
    cssArray.push(row ? classNames.bottomRow : classNames.bottomCol);

  if (className) cssArray.push(className);

  return (
    <div className={bootstrapClass(cssArray)} data-mode="view" style={style}>
      {children}
    </div>
  );
};

View.defaultProps = {
  children: undefined,
  size: undefined,
  fill: undefined,
  vertical: undefined,
  horizontal: undefined,
  left: undefined,
  right: undefined,
  top: undefined,
  bottom: undefined,
  stretch: undefined,
  row: undefined,
  className: undefined,
  style: undefined,
};
export default View;

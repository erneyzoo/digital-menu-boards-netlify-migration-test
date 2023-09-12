import React, { CSSProperties } from 'react';

const styles = {
  shadow: {
    textShadow: '2pt 2pt 1px black',
  } as CSSProperties,
};

type FAIconType = {
  icon: string;
  prefix?: 'solid' | 'light' | 'regular';
  size?: number;
  color?: string;
  shadow?: boolean;
};

const FAIcon: React.FC<FAIconType> = ({
  icon,
  prefix,
  size,
  color,
  shadow,
}) => (
  <span className={`text-${color} fs-${size}px`}>
    <i
      className={`fa-${prefix} fa-${icon}`}
      style={shadow ? styles.shadow : undefined}
    />
  </span>
);

export default FAIcon;

FAIcon.defaultProps = {
  prefix: 'solid',
  size: 13,
  color: 'primary',
  shadow: false,
};

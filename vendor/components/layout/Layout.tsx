// NODE_MODULES
import React, { createRef, FC, ReactNode, useEffect } from 'react';
import Head from 'next/head';
// VENDOR
import SizeListener from './SizeListener';
import cssNames from './layout.module.scss';

type LayoutType = {
  children?: ReactNode;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  background?: JSX.Element | (() => JSX.Element);
  header?: JSX.Element | (() => JSX.Element);
  footer?: JSX.Element | (() => JSX.Element);
};

const Layout: FC<LayoutType> = props => {
  const {
    background,
    header,
    footer,
    title,
    children,
    backgroundColor,
    textColor,
  } = props;

  const navRef = createRef<HTMLElement>();
  const bodyRef = createRef<HTMLElement>();
  const footRef = createRef<HTMLElement>();

  const renderComponent = (component?: JSX.Element | (() => JSX.Element)) =>
    typeof component === 'function' ? component() : component;

  useEffect(() => {
    if (backgroundColor) {
      document.body.style.backgroundColor = backgroundColor;
    }
  }, [backgroundColor]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <SizeListener />
      <section className={cssNames.background} style={{ backgroundColor }}>
        {background && renderComponent(background)}
      </section>

      <main
        className={cssNames.app}
        style={textColor ? { color: textColor } : undefined}
      >
        {header && (
          <header ref={navRef} className={cssNames.header}>
            {renderComponent(header)}
          </header>
        )}
        <section ref={bodyRef} className={cssNames.body}>
          {children}
        </section>
        {footer && (
          <footer ref={footRef} className={cssNames.footer}>
            {renderComponent(footer)}
          </footer>
        )}
      </main>
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  children: undefined,
  background: undefined,
  header: undefined,
  footer: undefined,
  backgroundColor: undefined,
  textColor: undefined,
};

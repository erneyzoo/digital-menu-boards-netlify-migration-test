import React from 'react';
import SizeType from '../types/SyzeType';
import AllType from '../types/AllType';

export const bootstrapClass = (data: [...string[]]) => {
  if (!data || data.length === 0) return '';
  let chain = '';
  data.forEach(name => {
    if (name) chain += `${name} `;
  });
  return chain.trim();
};

export const removeInStrIfContains = (
  str: string,
  key: string,
  map: [...string[]],
): string => {
  map.forEach(name => {
    if (str.includes(name)) str.replaceAll(key, '');
  });

  return str;
};

export const mergeClasses = (list: [...string[]]): string => {
  let className = '';
  list.forEach(name => {
    if (name && !className.includes(name)) {
      className += `${name} `;
    }
  });
  return className.trim();
};

export const mergeStyles = (styles: [...object[]]): object => {
  let style: object = {};
  styles.forEach(item => {
    style = { ...style, ...item };
  });
  return style;
};

export const getWindowsSize = (): SizeType => ({
  width: window.outerWidth || 0,
  height: window.outerHeight || 0,
});

export const isPortrait = (size: SizeType): boolean => size.width < size.height;

export const getElementSize = async (element?: HTMLElement | undefined) =>
  new Promise<SizeType>(resolve => {
    requestAnimationFrame(() => {
      if (element) {
        const { width, height } = element.getClientRects()[0];
        if (!width) resolve({ width: 0, height: 0 });
        resolve({
          width,
          height,
          x: 0,
          y: 0,
        });
      } else {
        resolve({ width: 0, height: 0 });
      }
    });
  });

export const propsToChildren = (children: JSX.Element, props: object) =>
  React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props });
    }
    return child;
  });

export type MergeType<A, B> = {
  [K in keyof A]: K extends keyof B ? B[K] : A[K];
} & B;

export const debounce = (ms: number) =>
  new Promise<void>(resolve => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, ms);
  });

// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const appListen = (name: string, callback: (props: AllType) => void) => {
  document.addEventListener(name, evt => {
    if (evt instanceof CustomEvent) {
      if (callback) callback(evt.detail as AllType);
    }
  });
};

export const appRemoveListener = (
  name: string,
  callback: (props: AllType) => void,
) => {
  document.removeEventListener(name, evt => {
    if (evt instanceof CustomEvent) {
      if (callback) callback(evt.detail as AllType);
    }
  });
};

export const executeListener = (name: string, props: AllType) => {
  const listener = new CustomEvent(name, {
    detail: props,
  });
  document.dispatchEvent(listener);
};

export const getWinSize = (): SizeType => {
  if (window !== undefined) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return {
    width: 0,
    height: 0,
  };
};

export const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const fit = (
  target: SizeType,
  container: SizeType,
  cover = false,
): SizeType => {
  const maxWidth = container.width; // Max width for the image
  const maxHeight = container.height; // Max height for the image
  let ratio = 0; // Used for aspect ratio
  let { width, height } = target;

  if (width > maxWidth) {
    ratio = maxWidth / width; // get ratio for scaling image
    width = maxWidth;
    height *= ratio;
  }

  if (height > maxHeight) {
    ratio = maxHeight / height;
    width *= ratio;
    height = maxHeight;
  }

  if (cover) {
    if (isPortrait(target)) {
      ratio = container.width / width;
      width = container.width;
      height *= ratio;
    } else {
      ratio = container.height / height;
      height = container.height;
      width *= ratio;
    }
  }

  return {
    width: Math.round(width),
    height: Math.round(height),
    x: Math.round((container.width - width) / 2),
    y: Math.round((container.height - height) / 2),
  };
};

export const jsonToBase64 = (obj: object): string =>
  Buffer.from(JSON.stringify(obj)).toString('base64');
export const base64ToJson = (secret: string): object =>
  JSON.parse(Buffer.from(secret, 'base64').toString());

export const isEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const copyToClipboard = async (text: string) => {
  if (navigator && navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    // mobile or old browsers
    // text area method
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.onfocus = e => {
      e.preventDefault();
    };
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    // here the magic happens
    document.execCommand('copy');
    textArea.remove();
  }
};

export const getPercent = (base: number, percent: number): number =>
  (base * percent) / 100;
export const getPercentInv = (percent: number, base: number): number =>
  (percent * 100) / base;

export const fitElementIn = (
  childSize: { width: number; height: number },
  parentSize: {
    width: number;
    height: number;
  },
) => {
  const childAspectRatio = childSize.width / childSize.height;
  const parentAspectRatio = parentSize.width / parentSize.height;

  let newWidth;
  let newHeight;

  if (childAspectRatio > parentAspectRatio) {
    // Fit child width-wise
    newWidth = parentSize.width;
    newHeight = newWidth / childAspectRatio;
  } else {
    // Fit child height-wise
    newHeight = parentSize.height;
    newWidth = newHeight * childAspectRatio;
  }

  // Adjust top and left for centering the child within the parent
  const centeredTop = (parentSize.height - newHeight) / 2;
  const centeredLeft = (parentSize.width - newWidth) / 2;

  return {
    width: newWidth,
    height: newHeight,
    left: centeredLeft,
    top: centeredTop,
  };
};

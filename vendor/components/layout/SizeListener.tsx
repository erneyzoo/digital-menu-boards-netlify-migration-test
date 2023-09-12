import { FC, useEffect } from 'react';
import { executeListener, getWinSize, sleep } from '../../utils/code-helper';

import { AppEvent } from '../../utils/app.constants';
import ScreenDataType from '../../types/ScreenData';
import AllType from '../../types/AllType';

const screenData: ScreenDataType = {
  size: {
    width: 0,
    height: 0,
  },
  mode: undefined,
};

export const ScreenTypes = Object.freeze({
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
  EXTRA_LARGE: 4,
});

export const getScreenData = (): ScreenDataType => screenData;

function evaluateSize() {
  const size = getWinSize();
  screenData.size = size;
  const { width } = size;
  let display = screenData.mode;
  if (width <= 480) display = ScreenTypes.SMALL;
  if (width > 480 && width <= 820) display = ScreenTypes.MEDIUM;
  if (width > 820 && width <= 1280) display = ScreenTypes.LARGE;
  if (width > 1280) display = ScreenTypes.EXTRA_LARGE;

  if (display !== screenData.mode) {
    screenData.mode = display;
    executeListener(AppEvent.resize, getScreenData() as AllType);
  }
}

type SizeListenerType = { debounceTime?: number };
// eslint-disable-next-line react/require-default-props,react/function-component-definition
const SizeListener: FC<SizeListenerType> = ({ debounceTime }) => {
  useEffect(() => {
    window.addEventListener('resize', evaluateSize);
    sleep(500).then(evaluateSize); // first dispatch

    return () => {
      window.removeEventListener('resize', evaluateSize);
    };
  }, [debounceTime]);

  return null;
};

SizeListener.defaultProps = {
  debounceTime: 500,
};

export default SizeListener;

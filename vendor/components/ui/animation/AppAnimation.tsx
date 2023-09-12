// NODE_MODULES
import { createRef, FC, useEffect, useState } from 'react';
import lottie from 'lottie-web';
// VENDOR
import { getAnimPath, getPublicPath } from '../../../utils/files-helper';
import { getScreenData } from '../../layout/SizeListener';
import { appListen, getElementSize } from '../../../utils/code-helper';
import { AppEvent } from '../../../utils/app.constants';
import ScreenDataType from '../../../types/ScreenData';

type AppAnimationType = {
  folder: string;
  /**
   * @description
   * if is true loads a data.json
   * if not loads data.mobile.json or data.desktop.json based on screen width.
   */
  single?: boolean;
};

const AppAnimation: FC<AppAnimationType> = ({ folder, single }) => {
  const [src, setSrc] = useState<string | undefined>();
  const ref = createRef<HTMLDivElement>();
  const name = `anim-${Math.random()}`;

  useEffect(() => {
    const handleAnimSource = (mode: number) => {
      const path = !single
        ? getAnimPath(folder, mode)
        : getPublicPath(`anim/${folder}/data.json`);
      if (path !== src) setSrc(path);
    };

    if (ref.current) {
      const screen: ScreenDataType = getScreenData();
      if (screen.mode !== undefined) {
        handleAnimSource(screen.mode);
      }

      // start listening
      appListen(AppEvent.resize, ({ mode }) => {
        handleAnimSource(mode);
      });
    }
  }, [folder, ref, single, src]);

  // render
  useEffect(() => {
    if (src) {
      lottie.destroy(name);
      // load
      lottie.loadAnimation({
        container: ref.current as Element,
        renderer: 'canvas',
        loop: true,
        autoplay: true,
        path: src,
        name,
      });
    }
    return () => {
      lottie.destroy(name);
    };
  }, [src, name, ref]);

  // ensure size is bigger than 0
  useEffect(() => {
    if (ref.current) {
      getElementSize(ref.current).then(({ width }) => {
        if (width < 1) {
          // force reload
          setSrc(prevState => prevState);
          console.log(`forcing animation [${folder}]`);
        }
      });
    }
  }, [ref]);

  return <div ref={ref} className="size-100" />;
};

export default AppAnimation;

AppAnimation.defaultProps = {
  single: undefined,
};

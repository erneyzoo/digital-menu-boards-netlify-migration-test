import {
  createRef,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { appListen, getPercent, sleep } from '../../utils/code-helper';
import { AppEvent } from '../../utils/app.constants';

type SquareContainerType = {
  children?: ReactNode;
  width?: number;
};

const SquareContainer: FC<SquareContainerType> = ({ children, width }) => {
  const ref = createRef<HTMLDivElement>();
  const [height, setHeight] = useState<number | undefined>(0);

  const resize = useCallback(() => {
    const size = ref.current?.offsetWidth;
    setHeight(size);
  }, [ref.current]);

  const checkWidth = useCallback(async () => {
    if (ref.current && width) {
      const parent = ref.current.parentElement || document.body;
      await sleep(100);
      ref.current.style.width = `${getPercent(parent.offsetWidth, width)}px`;
      await sleep(100);
      resize();
    }
  }, [ref.current, resize, width]);

  useEffect(() => {
    if (ref.current) {
      if (width) {
        checkWidth().then();
      } else {
        resize();
      }
      appListen(AppEvent.resize, resize);
    }
  }, [width, height, ref, resize]);

  return (
    <div ref={ref} style={{ height: `${height}px` }}>
      {children}
    </div>
  );
};

export default SquareContainer;

SquareContainer.defaultProps = {
  children: undefined,
  width: 100,
};

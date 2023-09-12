import { createRef, FC, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import cssImage from '../../styles/app-image.module.scss';
import { getImagePath } from '../../utils/files-helper';
import { fitElementIn, getElementSize } from '../../utils/code-helper';

type AppImageType = {
  src: string;
  alt: string;
  isLocal?: boolean;
  priority?: boolean;
  onLoad?: (element: HTMLImageElement) => void | undefined;
  initialSize?: {
    width: number;
    height: number;
  };
};

const AppImage: FC<AppImageType> = ({
  src,
  alt,
  isLocal,
  priority,
  onLoad,
  initialSize,
}) => {
  const ref = createRef<HTMLDivElement>();
  const [size, setSize] = useState(initialSize || { width: 0, height: 0 });

  const fitInParent = useCallback(async () => {
    const frame = ref.current?.parentElement;
    if (!src || !frame) return;
    const clone = document.createElement('img');
    clone.onload = async () => {
      const frameSize = await getElementSize(frame);
      const imgSize = fitElementIn(
        { width: clone.width, height: clone.height },
        frameSize,
      );
      clone.remove();
      setSize(imgSize);
    };
    clone.src = src;
  }, [ref, src]);

  useEffect(() => {
    if (ref.current) {
      fitInParent().then();
    }
  }, [fitInParent, ref]);

  return (
    <div ref={ref} className={cssImage.appImage}>
      <Image
        src={isLocal ? getImagePath(src) : src}
        width={size.width}
        height={size.height}
        alt={alt}
        priority={priority}
        onLoadingComplete={() => {
          if (onLoad)
            onLoad(ref.current?.querySelector('img') as HTMLImageElement);
        }}
      />
    </div>
  );
};

export default AppImage;

AppImage.defaultProps = {
  isLocal: true,
  priority: false,
  onLoad: undefined,
  initialSize: undefined,
};

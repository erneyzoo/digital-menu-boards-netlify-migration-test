import path from 'path';
import { ScreenTypes } from '../components/layout/SizeListener';

export const getPublicPath = (src: string): string =>
  path.join(__dirname, `/${src}`);

export const getAnimPath = (folder: string, mode: number): string =>
  getPublicPath(
    `anim/${folder}/data.${
      mode === ScreenTypes.SMALL ? 'mobile' : 'desktop'
    }.json`,
  );

export const getImagePath = (src: string): string => `/images/${src}`;

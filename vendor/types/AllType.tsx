import ScreenDataType from './ScreenData';

type AllType = object &
  object[] &
  string &
  string[] &
  number &
  number[] &
  boolean &
  undefined &
  never &
  null &
  ScreenDataType;

export default AllType;

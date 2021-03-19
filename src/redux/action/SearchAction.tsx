import {
  ENTER_QUERY,
  CHANGE_ENTITY,
  CLEAR,
  ADDPAGE,
  CLEARPAGE,
  GET_SCROLL_LOCATION,
} from "./SearchActionTypes";

export const enterQuery = (query: string) => ({
  type: ENTER_QUERY,
  query,
});

export const changeEntity = (entity: string) => ({
  type: CHANGE_ENTITY,
  entity,
});

export const clear = () => ({
  type: CLEAR,
});

export const addPage = () => ({
  type: ADDPAGE,
});

export const clearPage = () => ({
  type: CLEARPAGE,
});

export const getScrollY = (yLocation: number) => ({
  type: GET_SCROLL_LOCATION,
  yLocation,
});

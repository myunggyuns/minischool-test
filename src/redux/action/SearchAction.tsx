import {
  ENTER_QUERY,
  CHANGE_ENTITY,
  CLEAR,
  ADDPAGE,
  CLEARPAGE,
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

import {
  ENTER_QUERY,
  CHANGE_ENTITY,
  REQUEST_SEARCH_USER_REPO,
  CLEAR,
} from "./SearchActionTypes";

export const getRepo = (items: []) => ({
  type: REQUEST_SEARCH_USER_REPO,
  items,
});

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

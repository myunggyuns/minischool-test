import {
  ENTER_QUERY,
  CHANGE_ENTITY,
  REQUEST_SEARCH_USER_REPO,
  CLEAR,
} from "./SearchActionTypes";

export const getRepo = (query: object) => ({
  type: REQUEST_SEARCH_USER_REPO,
  query,
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

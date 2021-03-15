import {
  // REQUEST_SEARCH_USER_REPO,
  SUCCEED_SEARCH_USER_REPO,
} from "./SearchAPIActionTypes";

export const getRepo = (items: [], page: number) => ({
  type: SUCCEED_SEARCH_USER_REPO,
  items,
  page,
});

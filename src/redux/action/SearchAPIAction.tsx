import {
  REQUEST_SEARCH_USER_REPO,
  SUCCEED_SEARCH_USER_REPO,
  FAIL_SEARCH_USER_REPO,
} from "./SearchAPIActionTypes";

export const requestRepo = () => ({ type: REQUEST_SEARCH_USER_REPO });

export const getRepo = (items: [], page: number) => ({
  type: SUCCEED_SEARCH_USER_REPO,
  items,
  page,
});

export const failGetRepo = (e: {}) => ({
  type: FAIL_SEARCH_USER_REPO,
  e,
});

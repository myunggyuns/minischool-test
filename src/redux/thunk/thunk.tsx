import { searchRepo } from "../../rest/SearchAPI";
import {
  FAIL_SEARCH_USER_REPO,
  REQUEST_SEARCH_USER_REPO,
} from "../action/SearchAPIActionTypes";
import { getRepo } from "../action/SearchAPIAction";

export const getRepositories = () => async (dispatch: any, getState: any) => {
  const { entity, q, page } = getState().searchReducer;

  dispatch({ type: REQUEST_SEARCH_USER_REPO });

  try {
    const data = await searchRepo(entity, {
      q: q,
      page: page,
    });
    dispatch(getRepo(data, page));
  } catch (e) {
    dispatch({ type: FAIL_SEARCH_USER_REPO, errors: e });
  }
};

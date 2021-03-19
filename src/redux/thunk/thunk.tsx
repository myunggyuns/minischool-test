import { searchRepo } from "../../rest/SearchAPI";
import { getRepo, requestRepo, failGetRepo } from "../action/SearchAPIAction";

export const getRepositories = () => async (dispatch: any, getState: any) => {
  const { entity, q, page } = getState().searchReducer;

  dispatch(requestRepo());

  try {
    const data = await searchRepo(entity, {
      q: q,
      page: page,
    });
    dispatch(getRepo(data, page));
  } catch (e) {
    dispatch(failGetRepo(e));
  }
};

import {
  REQUEST_SEARCH_USER_REPO,
  ENTER_QUERY,
  CLEAR,
  CHANGE_ENTITY,
} from "../action/SearchActionTypes";

type QueryState = {
  query: string;
  entity: string;
};

type QueryAction = {
  type: string;
  query: string;
  entity: string;
};

const initialState: QueryState = {
  query: "",
  entity: "user",
};

export const searchReducer = (
  state: QueryState = initialState,
  action: QueryAction
) => {
  switch (action.type) {
    case CLEAR:
      return initialState;

    case REQUEST_SEARCH_USER_REPO:
      return state;

    case ENTER_QUERY:
      return { ...state, query: action.query };

    case CHANGE_ENTITY:
      return { ...state, entity: action.entity };

    default:
      return state;
  }
};

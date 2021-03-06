import {
  REQUEST_SEARCH_USER_REPO,
  ENTER_QUERY,
  CLEAR,
  CHANGE_ENTITY,
} from "../action/SearchActionTypes";

type QueryState = {
  q: string;
  entity: string;
  items: [];
};

type QueryAction = {
  type: string;
  query: string;
  entity: string;
  items: [];
};

const initialState: QueryState = {
  q: "",
  entity: "users",
  items: [],
};

export const searchReducer = (
  state: QueryState = initialState,
  action: QueryAction
) => {
  switch (action.type) {
    case CLEAR:
      return initialState;

    case REQUEST_SEARCH_USER_REPO:
      return { ...state, items: action.items };

    case ENTER_QUERY:
      return { ...state, q: action.query };

    case CHANGE_ENTITY:
      return { ...state, entity: action.entity };

    default:
      return state;
  }
};

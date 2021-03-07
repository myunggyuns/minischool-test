import {
  REQUEST_SEARCH_USER_REPO,
  ENTER_QUERY,
  CLEAR,
  CHANGE_ENTITY,
  ADDPAGE,
} from "../action/SearchActionTypes";
import { addMoreData } from "../../Utils/AddDataUtils";

type QueryState = {
  q: string;
  entity: string;
  items: [];
  page: number;
};

type QueryAction = {
  type: string;
  query: string;
  entity: string;
  items: [];
  page: number;
};

const initialState: QueryState = {
  q: "",
  entity: "users",
  items: [],
  page: 1,
};

export const searchReducer = (
  state: QueryState = initialState,
  action: QueryAction
) => {
  switch (action.type) {
    case CLEAR:
      return initialState;

    case REQUEST_SEARCH_USER_REPO:
      return {
        ...state,
        items: addMoreData(state.items, action.items, state.page),
        page: action.page,
      };

    case ADDPAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    case ENTER_QUERY:
      return { ...state, q: action.query };

    case CHANGE_ENTITY:
      return { ...state, entity: action.entity };

    default:
      return state;
  }
};

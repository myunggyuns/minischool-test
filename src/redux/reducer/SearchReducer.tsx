import {
  ENTER_QUERY,
  CLEAR,
  CHANGE_ENTITY,
  ADDPAGE,
  CLEARPAGE,
  GET_SCROLL_LOCATION,
} from "../action/SearchActionTypes";
import {
  REQUEST_SEARCH_USER_REPO,
  SUCCEED_SEARCH_USER_REPO,
  FAIL_SEARCH_USER_REPO,
} from "../action/SearchAPIActionTypes";
import { addMoreData } from "../../Utils/AddDataUtils";

type QueryState = {
  q: string;
  entity: string;
  items: [];
  page: number;
  isLoading: boolean;
  error: null | {};
  yLocation: number;
};

type QueryAction = {
  type: string;
  query: string;
  entity: string;
  items: [];
  page: number;
  isLoading: boolean;
  error: null | {};
  yLocation: number;
};

const initialState: QueryState = {
  q: "",
  entity: "users",
  items: [],
  page: 1,
  isLoading: false,
  error: null,
  yLocation: 0,
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
        isLoading: true,
      };

    case SUCCEED_SEARCH_USER_REPO:
      return {
        ...state,
        items: addMoreData(state.items, action.items, state.page),
        page: action.page,
        isLoading: false,
      };

    case FAIL_SEARCH_USER_REPO:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case ADDPAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    case CLEARPAGE:
      return {
        ...state,
        page: 1,
      };

    case ENTER_QUERY:
      return { ...state, q: action.query };

    case CHANGE_ENTITY:
      return { ...state, entity: action.entity };

    case GET_SCROLL_LOCATION:
      return { ...state, yLocation: action.yLocation };

    default:
      return state;
  }
};

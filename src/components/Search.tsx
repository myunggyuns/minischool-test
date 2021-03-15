import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enterQuery,
  clear,
  changeEntity,
  addPage,
  clearPage,
} from "../redux/action/SearchAction";
import { getRepo } from "../redux/action/SearchAPIAction";
import RepoListView from "./RepoListView";
import UserListView from "./UserListView";
import githubImage from "../image/github.jpg";
import "../styles/search.css";
import { searchRepo } from "../rest/SearchAPI";

type ReducerState = {
  searchReducer: {
    q: string;
    entity: string;
    items: [];
  };
};

const Search = () => {
  const dispatch: Function = useDispatch();
  const searchData: any = useSelector(
    (state: ReducerState) => state.searchReducer
  );

  useEffect(() => {
    var data;
    let preveQuery = searchData.q;
    console.log(searchData.q, preveQuery);
    const fetchData = async (q: string, page: number) => {
      data = await searchRepo(searchData.entity, {
        q: q,
        page: page,
      });
      dispatch(getRepo(data.items, page));
    };

    if (searchData.q.length > 2) {
      fetchData(searchData.q, searchData.page);
    }
  }, [searchData.page, searchData.q, dispatch, searchData.entity]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value.length > 2) {
      let preveQuery = searchData.q;
      setTimeout(() => {
        if (preveQuery !== value) {
          dispatch(clearPage());
        }
        dispatch(enterQuery(value));
      }, 500);
    } else if (value.length <= 2) {
      dispatch(clear());
    }
  };

  const onChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;
    dispatch(changeEntity(value));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;

      if (innerHeight + scrollTop === offsetHeight) {
        dispatch(addPage());
      }
    });
  }, [dispatch]);

  return (
    <div className="root">
      <div className="search-box">
        <div className="title-box">
          <img className="github-image" src={githubImage} alt="" />
          <div>
            <div className="title">GitHub Searcher</div>
            <div className="sub-title">Search users or repositories below</div>
          </div>
        </div>
        <form className="form-box" onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            placeholder="Starting typing to search .."
          />
          <select
            className="form-select"
            onChange={onChangeOption}
            value={searchData.entity}
          >
            <option value="users">Users</option>
            <option value="repositories">repositories</option>
          </select>
        </form>
      </div>
      <div className="repo-list">
        {searchData.entity === "users"
          ? searchData.items &&
            searchData.items.map((data: any) => (
              <UserListView key={data.id} data={data} />
            ))
          : searchData.items &&
            searchData.items.map((data: any) => (
              <RepoListView key={data.id} data={data} />
            ))}
      </div>
    </div>
  );
};

export default Search;

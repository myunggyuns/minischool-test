import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterQuery, clear, changeEntity } from "../redux/action/SearchAction";
import RepoListView from "./RepoListView";
import UserListView from "./UserListView";
import githubImage from "../image/github.jpg";
import "../styles/search.css";
import { searchRepo } from "../rest/SearchAPI";

type ReducerState = {
  searchReducer: {
    q: string;
    entity: string;
  };
};

const Search = () => {
  const dispatch: Function = useDispatch();
  const q: any = useSelector((state: ReducerState) => state.searchReducer.q);
  const entity: any = useSelector(
    (state: ReducerState) => state.searchReducer.entity
  );
  const [repoData, getRepoData] = useState<[]>([]);

  useEffect(() => {
    if (q.length > 2 && entity) {
      var data;
      const fetchData = async () => {
        data = await searchRepo(entity, { q: `${q}` });
        getRepoData(data.items);
      };
      fetchData();
    }
  }, [q, entity]);

  console.log(entity);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value.length > 2) {
      dispatch(enterQuery(value));
    } else if (value.length === 0) {
      dispatch(clear());
      getRepoData([]);
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
            value={entity}
          >
            <option value="users">Users</option>
            <option value="repositories">repositories</option>
          </select>
        </form>
      </div>
      <div className="repo-list">
        {repoData && entity === "users"
          ? repoData.map((data: any) => (
              <UserListView key={data.id} data={data} />
            ))
          : repoData.map((data: any) => (
              <RepoListView key={data.id} data={data} />
            ))}
      </div>
    </div>
  );
};

export default Search;

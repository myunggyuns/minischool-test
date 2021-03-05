import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterQuery, clear, changeEntity } from "../redux/action/SearchAction";
import RepoListView from "./RepoListView";
import githubImage from "../image/github.jpg";
import "../styles/search.css";
import { dummydata } from "../dummydata/dummydata";

const Search = () => {
  const dispatch: any = useDispatch();
  const inputQuery: any = useSelector((state: any) => state.searchReducer);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value.length > 2) {
      dispatch(enterQuery(value));
    } else if (value.length === 0) {
      dispatch(clear());
    }
  };

  const onChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;

    if (inputQuery.query.length > 2) {
      dispatch(changeEntity(value));
    }
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
          <select className="form-select" onChange={onChangeOption}>
            <option value="user">User</option>
            <option value="repository">Repository</option>
          </select>
        </form>
      </div>
      <div className="repo-list">
        {inputQuery.query &&
          dummydata.map((data: any) => (
            <RepoListView key={data.id} data={data} />
          ))}
      </div>
    </div>
  );
};

export default Search;

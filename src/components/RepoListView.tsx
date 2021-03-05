import React from "react";
import "../styles/repolistview.css";

type Props = {
  key: number;
  data: {
    id: number;
    name: string;
    repo: string;
  };
};

const RepoListView = ({ data }: Props) => {
  return (
    <div className="repo-root">
      <div>{data.name}</div>
      <div>{data.repo}</div>
    </div>
  );
};

export default RepoListView;

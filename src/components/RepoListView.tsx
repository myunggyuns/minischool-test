import React from "react";
import "../styles/repolistview.css";

type Props = {
  key: number;
  data: {
    name: string;
    stargazers_count: number;
    full_name: string;
    html_url: string;
    watchers: number;
    owner?: {
      html_url: string;
    };
  };
};

const RepoListView = ({ data }: Props) => {
  return (
    <div className="repo-root">
      {data && (
        <>
          <div className="text">{`Repo name: ${data.name}`}</div>
          <div className="text">{`Repo Full_Name: ${data.full_name}`}</div>
          <div className="text">{`Watchers: ${data.watchers}`}</div>
          <div className="text">{`Stars Count: ${data.stargazers_count}`}</div>
          <div className="text">
            <a
              rel="noreferrer"
              target="_blank"
              href={data.html_url}
            >{`Go to this Repo`}</a>
          </div>
          <div className="text">
            {data.owner && (
              <a
                rel="noreferrer"
                target="_blank"
                href={data.owner.html_url}
              >{`Go to User Profile`}</a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RepoListView;

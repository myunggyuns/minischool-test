import React from "react";
import "../styles/userlistview.css";

type Props = {
  key: number;
  data: {
    id: number;
    login: string;
    repo: string;
    avatar_url: string;
    html_url: string;
  };
};

const UserListView = ({ data }: Props) => {
  return (
    <div className="user-root">
      <div className="user-image-box">
        <img className="user-image" src={data.avatar_url} alt="" />
      </div>
      <div className="text-box">
        <div className="text">{`User Name: ${data.login}`}</div>
        <div className="text">{`Location: ${data.html_url}`}</div>
        <div className="text">
          <a
            rel="noreferrer"
            target="_blank"
            href={data.html_url}
          >{`Go to User Profile`}</a>
        </div>
      </div>
    </div>
  );
};

export default UserListView;

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import DispatchContext from "../../context/DispatchContext";

const HeaderLoggedIn = () => {
  const dispatch = useContext(DispatchContext);
  
  const handleLogout = () => {
    dispatch({type: "logout"});

    localStorage.removeItem("socializrToken");
    localStorage.removeItem("socializrUsername");
    localStorage.removeItem("socializrAvatar");
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="/" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="/" className="mr-2">
        <img
          className="small-header-avatar"
          src={localStorage.getItem("socializrAvatar")}
          alt="User avatar"
        />
      </a>
      <Link to="/create-post" className="btn btn-sm btn-success mr-2">
        Create Post
      </Link>
      <button className="btn btn-sm btn-secondary" onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default HeaderLoggedIn;

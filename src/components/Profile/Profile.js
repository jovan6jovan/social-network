import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import StateContext from "../../context/StateContext";
import Page from "../Page/Page";
import ProfilePosts from "../ProfilePosts/ProfilePosts";

const Profile = () => {
  const { username } = useParams();
  const state = useContext(StateContext);
  const [profileData, setProfileData] = useState({
    profileUsername: "...",
    profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
    isFollowing: false,
    counts: {
      postCount: "",
      followersCount: "",
      followingCount: ""
    }
  });

  useEffect(() => {
    const request = axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await axios.post(
          `/profile/${username}`,
          { token: state.user.token },
          { cancelToken: request.token }
        );
        setProfileData(response.data);
      } catch (err) {
        console.log("There was a problem.");
      }
    }

    fetchData();

    return () => {
      request.cancel();
    };
  }, [state.user.token, username]);

  return (
    <Page title="Your Profile">
      <h2>
        <img
          className="avatar-small"
          src={profileData.profileAvatar}
          alt="Socializr user avatar image"
        />{" "}
        {profileData.profileUsername}
        <button className="btn btn-primary btn-sm ml-2">
          Follow <i className="fas fa-user-plus"></i>
        </button>
      </h2>

      <div className="profile-nav nav nav-tabs pt-2 mb-4">
        <a href="#" className="active nav-item nav-link">
          Posts: {profileData.counts.postCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Followers: {profileData.counts.followersCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Following: {profileData.counts.followingCount}
        </a>
      </div>
      <ProfilePosts />
    </Page>
  );
};

export default Profile;

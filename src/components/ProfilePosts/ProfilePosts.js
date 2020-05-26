import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Loading from "../Loading/Loading";

const ProfilePosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const request = axios.CancelToken.source();

    async function fetchPosts() {
      try {
        const response = await axios.get(`/profile/${username}/posts`, {
          cancelToken: request.token
        });
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.log("There was a problem.");
      }
    }

    fetchPosts();

    return () => {
      request.cancel();
    };
  }, [username]);

  const postsList = posts.map(post => {
    const date = new Date(post.createdDate);
    const formattedDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}.`;
    return (
      <Link
        key={post._id}
        to={`/post/${post._id}`}
        className="list-group-item list-group-item-action"
      >
        <img
          className="avatar-tiny"
          src={post.author.avatar}
          alt="Socializr user avatar image"
        />{" "}
        <strong>{post.title}</strong>{" "}
        <span className="text-muted small">on {formattedDate} </span>
      </Link>
    );
  });

  return loading ? <Loading /> : <div className="list-group">{postsList}</div>;
};

export default ProfilePosts;

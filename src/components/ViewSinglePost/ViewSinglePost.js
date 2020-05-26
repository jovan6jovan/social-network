import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Page from "../Page/Page";

const ViewSinglePost = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}`);
        console.log(response.data);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.log("There was a problem.");
      }
    }

    fetchPost();
  }, [id]);

  const date = new Date(post.createdDate);
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;

  return loading ? (
    <Page title="...">
      <div>Loading...</div>
    </Page>
  ) : (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="/" className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </a>
          <a className="delete-post-button text-danger" title="Delete">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img
            className="avatar-tiny"
            src={post.author.avatar}
            alt="User avatar tiny"
          />
        </Link>
        Posted by{" "}
        <Link to={`/profile/${post.author.username}`}>
          {post.author.username}
        </Link>{" "}
        on {formattedDate}
      </p>

      <div className="body-content">{post.body}</div>
    </Page>
  );
};

export default ViewSinglePost;

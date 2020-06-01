import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import Page from "../Page/Page";
import Loading from "../Loading/Loading";

const ViewSinglePost = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const request = axios.CancelToken.source();

    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}`, {
          cancelToken: request.token
        });
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.log("There was a problem.");
      }
    }

    fetchPost();

    return () => {
      request.cancel();
    };
  }, [id]);

  const date = new Date(post.createdDate);
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}.`;

  return loading ? (
    <Page title="...">
      <Loading />
    </Page>
  ) : (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <Link to={`/post/${post._id}/edit`} className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </Link>
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

      <div className="body-content">
        <ReactMarkdown
          source={post.body}
          allowedTypes={[
            "paragraph",
            "strong",
            "emphasis",
            "text",
            "heading",
            "list",
            "link",
            "listItem"
          ]}
        />
      </div>
    </Page>
  );
};

export default ViewSinglePost;

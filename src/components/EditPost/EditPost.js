import React, { useState, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import Page from "../Page/Page";
import Loading from "../Loading/Loading";

const EditPost = () => {
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

  return loading ? <Loading /> : (
    <Page title="Edit Post">
      <form>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
            value={post.title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
            value={post.body}
          ></textarea>
        </div>

        <button className="btn btn-primary">Save Updates</button>
      </form>
    </Page>
  )
}

export default EditPost;

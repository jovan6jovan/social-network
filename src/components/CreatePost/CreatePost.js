import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Page from "../Page/Page";
import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  let history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("/create-post", {
        title,
        body,
        token: state.user.token
      });

      dispatch({type: "flashMessage", value: "You successfully created a post."});
      history.push(`/post/${response.data}`);
    } catch (err) {
      console.log("There was a problem");
    }
  }
  return (
    <Page title="Create Post">
      <form onSubmit={handleSubmit}>
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
            onChange={e => setTitle(e.target.value)}
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
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  );
};

export default CreatePost;

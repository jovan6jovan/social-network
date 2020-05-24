import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

// const SomeContext = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("socializrToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("socializrToken"),
      username: localStorage.getItem("socializrUsername"),
      avatar: localStorage.getItem("socializrAvatar")
    }
  };

  const contextReducer = (draft, action) => {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        break;
      case "logout":
        draft.loggedIn = false;
        break;
      case "flashMessage":
        draft.flashMessages.push(action.value);
        break;
    }
  };

  useEffect(() => {
    if (initialState.loggedIn) {
      localStorage.setItem("socializrToken", initialState.user.token);
      localStorage.setItem("socializrUsername", initialState.user.username);
      localStorage.setItem("socializrAvatar", initialState.user.avatar);
    } else {
      localStorage.removeItem("socializrToken");
      localStorage.removeItem("socializrUsername");
      localStorage.removeItem("socializrAvatar");
    }
  }, [
    initialState.loggedIn,
    initialState.user.token,
    initialState.user.username,
    initialState.user.avatar
  ]);

  const [state, dispatch] = useImmerReducer(contextReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// const contextConsumer = contextContext.Consumer;

export { ContextProvider };

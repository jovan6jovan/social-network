import React, { useReducer, createContext } from "react";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

// const SomeContext = createContext();

const SomeProvider = ({ children }) => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("socializrToken")),
    flashMessages: []
  };

  const someReducer = (state, action) => {
    switch(action.type) {
      case "login":
        return {
          loggedIn: true,
          flashMessages: state.flashMessages
        }
      case "logout":
        return {
          loggedIn: false,
          flashMessages: state.flashMessages
        }
      case "flashMessage":
        return {
          loggedIn: state.loggedIn,
          flashMessages: state.flashMessages.concat(action.value)
        }
    }
  }

  const [state, dispatch] = useReducer(someReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// const SomeConsumer = SomeContext.Consumer;

export { SomeProvider };

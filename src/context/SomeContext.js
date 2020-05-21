import React, { useState, createContext } from "react";

const SomeContext = createContext();

const SomeProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("socializrToken")));
  const [flashMessages, setFlashMessages] = useState([]);

  const addFlashMessage = msg => setFlashMessages(prev => prev.concat(msg));

  return (
    <SomeContext.Provider value={{loggedIn, setLoggedIn, flashMessages, addFlashMessage}}>
      {children}
    </SomeContext.Provider>
  );
};

const SomeConsumer = SomeContext.Consumer;

export { SomeProvider, SomeConsumer, SomeContext };

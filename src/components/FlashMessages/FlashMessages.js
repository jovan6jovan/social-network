import React, { useContext } from "react";

import StateContext from "../../context/StateContext";

const FlashMessages = () => {
  const { flashMessages } = useContext(StateContext);

  return (
    <div className="floating-alerts">
      {flashMessages.map((flashMessage, idx) => {
        return (
          <div
            className="alert alert-success text-center floating-alert shadow-sm"
            key={idx}
          >
            {flashMessage}
          </div>
        );
      })}
    </div>
  );
};

export default FlashMessages;

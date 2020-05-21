import React, { useContext } from "react";

import { SomeContext } from "../../context/SomeContext";

const FlashMessages = () => {
  const { flashMessages } = useContext(SomeContext);

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

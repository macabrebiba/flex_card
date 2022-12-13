import React from "react";

const ErrorMessage = () => {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          fontSize: "50" + "px",
          position: "absolute",
          width: "100" + "%",
          height: "100" + "%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Desolé mais cette application c'est juste pour les teléphones.
      </h1>
    </div>
  );
};

export default ErrorMessage;

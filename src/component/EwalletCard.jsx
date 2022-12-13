import React from "react";

const EwalletCard = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(#008522, #365ABD)",
          width: "90" + "%",
          height: "250" + "px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          left: "20" + "px",
          top: "20" + "px",
          borderRadius: "15" + "px",
        }}
      >
        <h1 className="solde">234 DH</h1>
        <h4 className="creditCard">
          2345 &nbsp; &nbsp; 2345 &nbsp; &nbsp; 2345 &nbsp; &nbsp; 2345 &nbsp;
          &nbsp; 3421
        </h4>
        <h1 className="name">Karim Baggari</h1>
        <h1 className="points">435 pts</h1>
      </div>
    </>
  );
};

export default EwalletCard;
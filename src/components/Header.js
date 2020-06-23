import React from "react";

const Header = () => {
  return (
    <header>
      <h1
        style={{
          fontSize: "25px",
          marginBottom: "15px",
          marginTop: "20px",
          textAlign: "center",
          color: "#54287e",
        }}
      >
        Simple Todo App
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  );
};

export default Header;

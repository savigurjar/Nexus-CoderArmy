import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

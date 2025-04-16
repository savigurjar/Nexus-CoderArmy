import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Body from "./component/Body";
import Header from "./component/Header";
import Main from "./component/Main"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Header />} />
          </Route>
          <Route path="/Main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

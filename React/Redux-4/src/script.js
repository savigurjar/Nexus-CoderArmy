import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counting from "./Component/Counting";
import store from "./Component/Stores";
function App() {
  return (
    <Provider store={store}>
      <Counting />
    </Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

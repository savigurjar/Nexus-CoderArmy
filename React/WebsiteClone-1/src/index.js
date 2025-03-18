import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"; // Import Header Component
import "../style.css"; // Import CSS

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

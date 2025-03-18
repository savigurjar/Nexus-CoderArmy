import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"; // Import Header Component
import Main from "./component/Main"; // Import Main Component
import Card from "./component/Card"; // Import Card Component
import "../style.css"; // Import CSS

function App() {
  return (
    <div>
      <Header />
      <>
        <Main />
      </>
      <>
        <Card />
      </>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

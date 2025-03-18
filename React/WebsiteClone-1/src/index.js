import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"; // Import Header Component
import Main from "./component/Main"; // Import Main Component
import Card from "./component/Card"; // Import Card Component
import arr from "./utils/dummy"; // Import dummy data
import "../style.css"; // Import CSS

function App() {
  return (
    <div>
      <Header />
      <Main />

      <div
        className="middle"
        style={{
          display: "flex",
          marginTop: "20px",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {arr.map((value, index) => (
          <Card
            key={index}
            image={value.image}
            cardnu={value.cardnu}
            // name={value.name}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

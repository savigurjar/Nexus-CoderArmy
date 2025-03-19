import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"; // Import Header Component
import Main from "./component/Main"; // Import Main Component
import { Card, Bcard, Gcard, Hcard } from "./component/Card"; // Import Card Component
import { arr, arv, ary, arry } from "./utils/dummy"; // Import dummy data
import "../style.css"; // Import CSS

function App() {
  let [A, setp] = useState(arv);

  function off() {
    arv.sort((a, b) => b.offer - a.offer);
    console.log(A);
    setp([...A]);
  }
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
        {/* for card */}
        {arr.map((value, index) => (
          <Card
            key={index}
            image={value.image}
            cardnu={value.cardnu}
            // name={value.name}
          />
        ))}
      </div>

      <div className="hbb" style={{ color: "black" }}>
        <h2 className="trend">TRENDIEST CATEGORIES</h2>
        <button onClick={off} id="hbtn">
          Best Offers
        </button>
      </div>

      <div
        className="mid"
        style={{
          display: "flex",
          marginTop: "20px",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {/* for bcard */}
        {A.map((value, index) => (
          <Bcard
            key={index}
            cimg={value.cimg}
            offer={`Up to ${value.offer}% off`}
          />
        ))}
      </div>

      <div
        className="gmid"
        style={{
          marginTop: "60px",
          display: "flex",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {ary.map((value, ind) => (
          <Gcard key={ind} gimg={value.gimg} gnu={value.gnu} />
        ))}
      </div>

      <div className="hhead" style={{ marginLeft: "50px", marginTop: "40px" }}>
        <p className="ph2">IN THE SPOTLIGHT</p>
        <h2 className="h2p">Hottest brands on offer</h2>
      </div>

      <div
        className="hmid"
        style={{
          marginTop: "60px",
          display: "flex",
          flexWrap: "wrap",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {arry.map((value, index) => (
          <Hcard
            key={index}
            himg={value.himg}
            hnu={value.hnu}
            ofr={`Up to ${value.ofr}% off`}
            pr={value.pr}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

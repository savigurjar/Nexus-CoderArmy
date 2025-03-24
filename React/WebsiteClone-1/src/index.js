import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"; // Import Header Component
import Footer from "./component/Footer"; // Import Footer Component
import { Main, Mast, Master } from "./component/Main"; // Import Main Component
import { Card, Bcard, Gcard, Hcard, Mcard, Fcard } from "./component/Card"; // Import Card Component
import { arr, arv, ary, arry, array, arrayy } from "./utils/dummy"; // Import dummy data
import "../style.css"; // Import CSS

function App() {
  let [A, seta] = useState([...arv]); // Create a copy to avoid mutation
  const [B, setb] = useState([...arry]); // Create a copy to avoid mutation

  function off() {
    const sortedArray = [...A].sort((a, b) => b.offer - a.offer); // Sort a new copy
    seta(sortedArray);
  }

  function offe() {
    const filteredArray = arry.filter((value) => value.ofr > 40); // Use correct property name
    setb(filteredArray);
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
      
      <Mast />

      <div className="hhead" style={{ marginLeft: "50px", marginTop: "40px" }}>
        <p className="ph2">IN THE SPOTLIGHT</p>
        <div className="hb" style={{ display: "flex" }}>
          <h2 className="h2p">Hottest brands on offer</h2>
          <button onClick={offe} id="sty">
            Offers
          </button>
        </div>
      </div>

      <div
        className="hmid"
        style={{
          marginTop: "25px",
          display: "flex",
          flexWrap: "wrap",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {B.map((value, index) => (
          <Hcard
            key={index}
            himg={value.himg}
            hnu={value.hnu}
            ofr={`Up to ${value.ofr}% off`}
            pr={value.pr}
          />
        ))}
      </div>

      <Master />

      <div className="move" style={{ marginLeft: "50px", marginTop: "50px" }}>
        <p className="ph3">YOUR LITTLE CRASH-COURSE</p>

        <h2 className="h3p">on what's moving this season</h2>
      </div>

      <div
        className="mmid"
        style={{
          marginTop: "30px",
          display: "flex",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {array.map((value, index) => (
          <Mcard
            key={index}
            mnimg={value.mnimg}
            mnu={value.mnu}
            mpr={value.mpr}
          />
        ))}
      </div>

      <div className="fove" style={{ marginLeft: "50px", marginTop: "50px" }}>
        <p className="ph4">OUR STORES</p>

        <h2 className="h4p">Find everything for your every need</h2>
      </div>

      <div
        className="fmid"
        style={{
          marginTop: "30px",
          display: "flex",
          overflowX: "auto",
          maxWidth: "100%",
          scrollbarWidth: " thin" /* For Firefox */,
          scrollbarColor: "#ccc transparent" /* Custom scrollbar color */,
        }}
      >
        {arrayy.map((value, index) => (
          <Fcard
            key={index}
            fimg={value.fimg}
            fnu={value.fnu}
            fpr={value.fpr}
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

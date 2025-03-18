function Card({ image, cardnu, name }) {
  return (
    <div>
      <button className="card-btn">
        <img className="cardimg" src={image} alt={cardnu} />
        {/* {name} */}
      </button>
    </div>
  );
}
function Bcard({ cimg, cnu, offer }) {
  return (
    <div>
      <button className="bcard-btn">
        <img className="bcardimg" src={cimg} alt={cnu} />
        <p className="para">{offer}</p>
      </button>
    </div>
  );
}

export { Card, Bcard };

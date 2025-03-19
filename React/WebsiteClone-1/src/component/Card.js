function Card({ image, cardnu, name }) {
  return (
    <div className="cbtn">
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
function Gcard({ gimg, gnu }) {
  return (
    <div>
      <button className="gcard-btn">
        <img className="gcardimg" src={gimg} alt={gnu} />
      </button>
    </div>
  );
}

function Hcard({ himg, hnu, ofr, pr }) {
  return (
    <div>
      <button className="hcard-btn">
        <img className="hcardimg" src={himg} alt={hnu} />
        <p className="of">{ofr}</p>
        <p className="hpara">{pr}</p>
      </button>
    </div>
  );
}

function Mcard({ mnimg, mnu, mpr }) {
  return (
    <div>
      <button className="mcard-btn">
        <img className="mcardimg" src={mnimg} alt={mnu} />
        <p className="mpara">{mpr}</p>
      </button>
    </div>
  );
}
function Fcard({ fimg, fnu, fpr }) {
  return (
    <div>
      <button className="fcard-btn">
        <img className="fcardimg" src={fimg} alt={fnu} />
        <p className="fpara">{fpr}</p>
      </button>
    </div>
  );
}

export { Card, Bcard, Gcard, Hcard, Mcard ,Fcard};
